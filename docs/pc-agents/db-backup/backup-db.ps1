# backup-db.ps1 — ежедневная копия боевой базы Neon на ПК (tasks/pcd-db-backup.md).
# Рабочая копия: D:\backup\pawenn\backup-db.ps1 (+ папка bin\ с sh-скриптами).
# Строки подключения — только в D:\backup\pawenn\neon.env (NEON_URL, LOCAL_URL),
# в контейнер попадают через --env-file; в лог и терминал не печатаются.
# В Neon только читаем: pg_dump и select count(*).

$ErrorActionPreference = 'Continue'
$Base  = 'D:\backup\pawenn'
$EnvF  = Join-Path $Base 'neon.env'
$Bin   = Join-Path $Base 'bin'
$Daily = Join-Path $Base 'daily'
$Log   = Join-Path $Base 'backup.log'
$Img   = 'postgres:18'          # = основная версия Neon (show server_version: 18.x)

function Write-Log([string]$msg) {
  $line = '{0} {1}' -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $msg
  Add-Content -Path $Log -Value $line -Encoding UTF8
  Write-Output $line
}
function Invoke-Pg([string]$script, [string]$arg) {
  $out = docker run --rm --add-host=host.docker.internal:host-gateway --env-file $EnvF `
    -v "${Daily}:/dump" -v "${Bin}:/bin2:ro" $Img sh "/bin2/$script" $arg 2>&1
  return @{ rc = $LASTEXITCODE; out = ($out | Out-String).Trim() }
}

New-Item -ItemType Directory -Force -Path $Daily | Out-Null

docker info *> $null
if ($LASTEXITCODE -ne 0) { Write-Log 'FAIL docker not running'; exit 1 }
if (-not (Test-Path $EnvF)) { Write-Log 'FAIL no neon.env'; exit 1 }

$date = Get-Date -Format 'yyyy-MM-dd'
$file = "pawenn-$date.dump"
$path = Join-Path $Daily $file

# 1. Дамп
$r = Invoke-Pg 'dump.sh' $file
if ($r.rc -ne 0 -or -not (Test-Path $path)) {
  Write-Log ("FAIL pg_dump rc={0}: {1}" -f $r.rc, ($r.out -replace 'postgres(ql)?://\S+', '<url>'))
  exit 1
}

# 2. Проверка файла
$size = (Get-Item $path).Length
$c = Invoke-Pg 'check.sh' $file
if ($size -le 0 -or $c.rc -ne 0) {
  Move-Item $path "$path.failed" -Force
  Write-Log ("FAIL dump unreadable size={0} rc={1}" -f $size, $c.rc)
  exit 1
}

# 3. Локальная копия
$rs = Invoke-Pg 'restore.sh' $file
$restoreNote = if ($rs.rc -eq 0) { 'restore=ok' } else { "restore=rc$($rs.rc)" }

# 4. Сверка: City Business PriceItem Review ClickEvent
$neon  = (Invoke-Pg 'counts.sh' 'NEON_URL').out
$local = (Invoke-Pg 'counts.sh' 'LOCAL_URL').out
$n = $neon -split '\s+' | Where-Object { $_ -ne '' }
$l = $local -split '\s+' | Where-Object { $_ -ne '' }
$ok = ($n.Count -eq 5 -and $l.Count -eq 5 -and $n -notcontains 'ERR' -and $l -notcontains 'ERR')
if ($ok) {
  for ($i = 0; $i -lt 4; $i++) { if ($n[$i] -ne $l[$i]) { $ok = $false } }
  if ([int]$l[4] -gt [int]$n[4]) { $ok = $false }   # клики: в копии не больше, чем в Neon
}
$status = if ($ok) { 'OK' } else { 'FAIL' }
$mb = '{0:N1}MB' -f ($size / 1MB)
Write-Log ("{0} {1} size={2} {3} neon=[{4}] local=[{5}] (City Business PriceItem Review ClickEvent)" -f $status, $file, $mb, $restoreNote, $neon, $local)

# 6. Хранение: 14 последних дней + 1-е число месяца за год
$now = Get-Date
Get-ChildItem $Daily -Filter 'pawenn-*.dump*' | ForEach-Object {
  if ($_.Name -match 'pawenn-(\d{4}-\d{2}-\d{2})') {
    $d = [datetime]::ParseExact($Matches[1], 'yyyy-MM-dd', $null)
    $age = ($now - $d).TotalDays
    $keep = ($age -le 14) -or ($d.Day -eq 1 -and $age -le 366)
    if (-not $keep) { Remove-Item $_.FullName -Force }
  }
}

# 7. Раз в неделю (воскресенье) — копия вне ПК, если есть Google Drive для компьютера
if ($now.DayOfWeek -eq 'Sunday' -and $status -eq 'OK') {
  $gd = @('G:\My Drive', 'G:\Мой диск', "$env:USERPROFILE\Google Drive", "$env:USERPROFILE\My Drive") | Where-Object { Test-Path $_ } | Select-Object -First 1
  if ($gd) {
    $dst = Join-Path $gd 'Pawenn backup'
    New-Item -ItemType Directory -Force -Path $dst | Out-Null
    Copy-Item $path $dst -Force
    Write-Log "offsite: copied to $dst"
  } else {
    Write-Log 'offsite: no Google Drive on this PC — ask owner where to keep weekly copy'
  }
}

if ($status -ne 'OK') { exit 1 }

#!/bin/sh
# $1 — NEON_URL или LOCAL_URL (имя переменной). Печатает 5 чисел через пробел.
eval url=\$$1
out=""
for t in City Business PriceItem Review ClickEvent; do
  n=$(psql "$url" -Atc "select count(*) from \"$t\"" 2>/dev/null) || n=ERR
  out="$out$n "
done
echo "$out"

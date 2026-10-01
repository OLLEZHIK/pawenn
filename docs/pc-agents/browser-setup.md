# Браузер и вход в Google в контейнере `agyN`

Нужно для карты и отзывов Google (`maps-exam.md`, `reviews-exam.md`).
Экрана в контейнере нет, поэтому вход в Google делается через окно
noVNC в браузере владельца на Windows. Изменение образа и пересоздание
контейнера — критическая инфраструктура: делает диспетчер **только по
прямому поручению владельца**.

## 1. Образ: дописать в `D:\docker\Dockerfile`

После строки `RUN apt-get update && apt-get install -y curl git ca-certificates gh ...`
и **до** `USER ubuntu`:

```dockerfile
# Node 20 (для npm run gate / check-city и Playwright)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs
# Экран без монитора + окно в браузере владельца (noVNC)
RUN apt-get install -y xvfb x11vnc novnc websockify && rm -rf /var/lib/apt/lists/*
# Chromium для Playwright — вне /home, иначе его закроет том с домашней папкой
ENV PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers
RUN npx -y playwright@latest install --with-deps chromium && chmod -R a+rx /opt/pw-browsers
```

Сборка: `docker build -t agy D:\docker`.

## 2. Пересоздать контейнер с тем же томом

Входы в Antigravity, GitHub и клон лежат в томе — они сохранятся.

```powershell
docker inspect agy1 --format "{{range .Mounts}}{{.Name}}{{end}}"   # имя тома, например agy1-home
docker stop agy1
docker rename agy1 agy1-old
docker run -dit --name agy1 --restart unless-stopped -p 127.0.0.1:6080:6080 -v <том>:/home/ubuntu agy bash
docker exec agy1 bash -lc "node -v && ls /opt/pw-browsers && agy --help | head -1 && gh auth status"
```

Всё на месте — старый удаляет владелец сам: `docker rm agy1-old`.
Порт `6080` открыт только на этом компьютере (`127.0.0.1`).

## 3. Вход в Google (один раз, делает владелец)

Диспетчер запускает экран и браузер:

```powershell
docker exec -d agy1 bash -lc "Xvfb :99 -screen 0 1280x900x24 & sleep 1; x11vnc -display :99 -forever -nopw -localhost -quiet & websockify --web /usr/share/novnc 6080 localhost:5900"
docker exec -d agy1 bash -lc "export DISPLAY=:99; CH=$(ls -d /opt/pw-browsers/chromium-*/chrome-linux/chrome | head -1); $CH --no-sandbox --user-data-dir=$HOME/.agy-google-profile https://accounts.google.com"
```

Владелец открывает на Windows `http://localhost:6080/vnc.html` →
Connect → входит **отдельным аккаунтом для агентов** (не основным).
Пароль вводит только владелец; агентам и диспетчеру его не давать.
Потом закрывает окно Chromium.

Проверка входа (диспетчер): Google Maps в том же профиле, «Salón pre psov
LEO, Prešov» → «Recenzie» — видно больше 5 отзывов, нет окна
«Prihláste sa».

## 4. Как агент пользуется входом

Playwright с тем же профилем, можно без окна:

```js
const { chromium } = require("playwright");
const ctx = await chromium.launchPersistentContext(process.env.HOME + "/.agy-google-profile", {
  headless: true, args: ["--no-sandbox"] });
```

Профиль — в томе, вход переживает перезапуск контейнера. Один профиль —
один контейнер (два Chromium на одном профиле ломают его).

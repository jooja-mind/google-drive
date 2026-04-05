# google-drive

Очень простой пример проекта, который использует:
- https://github.com/jooja-mind/jooja-auth-hub-client

Что делает:
- получает access token из JQA
- запрашивает список последних файлов из Google Drive API
- печатает красивый текстовый список в консоль

## Установка

```bash
cd ~/node/google-drive
npm install
cp .env.example .env
```

Заполни в `.env`:
- `JQA_UUID`
- `JQA_SECRET`
- `JQA_PROVIDER=google`
- `JQA_BASE_URL=https://jooja-auth.leverton.dev`

## Запуск

```bash
npm run list
```

## Что внутри

Проект специально сделан максимально простым:
- один файл: `src/index.js`
- получение токена через `getAccessTokenFromEnv()`
- обычный `fetch` в Google Drive API

## Зависимость

Проект использует GitHub dependency:

```json
{
  "dependencies": {
    "jooja-quick-auth": "github:jooja-mind/jooja-auth-hub-client"
  }
}
```

## Идея кода

```js
import { getAccessTokenFromEnv } from 'jooja-quick-auth';

const accessToken = await getAccessTokenFromEnv();
```

Дальше обычный запрос в `https://www.googleapis.com/drive/v3/files`.

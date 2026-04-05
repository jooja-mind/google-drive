# google-drive

A very simple example project that uses:
- https://github.com/jooja-mind/jooja-auth-hub-client

What it does:
- gets an access token from JQA
- requests the latest files from the Google Drive API
- prints a clean text list to the console

## Install

```bash
cd ~/node/google-drive
npm install
cp .env.example .env
```

Fill in `.env` with:
- `JQA_UUID`
- `JQA_SECRET`
- `JQA_PROVIDER=google`
- `JQA_BASE_URL=https://jooja-auth.leverton.dev`

## Run

```bash
npm run list
```

## What is inside

This project is intentionally as simple as possible:
- one file: `src/index.js`
- token retrieval via `getAccessTokenFromEnv()`
- a plain `fetch` call to the Google Drive API

## Dependency

This project uses a GitHub dependency:

```json
{
  "dependencies": {
    "jooja-quick-auth": "github:jooja-mind/jooja-auth-hub-client"
  }
}
```

## Core idea

```js
import { getAccessTokenFromEnv } from 'jooja-quick-auth';

const accessToken = await getAccessTokenFromEnv();
```

After that, it makes a normal request to `https://www.googleapis.com/drive/v3/files`.

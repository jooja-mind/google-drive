import { getAccessTokenFromEnv } from 'jooja-quick-auth';

async function main() {
  const accessToken = await getAccessTokenFromEnv();

  const url = new URL('https://www.googleapis.com/drive/v3/files');
  url.searchParams.set('pageSize', '20');
  url.searchParams.set('fields', 'files(id,name,mimeType,modifiedTime),nextPageToken');
  url.searchParams.set('orderBy', 'modifiedTime desc');
  url.searchParams.set('supportsAllDrives', 'true');
  url.searchParams.set('includeItemsFromAllDrives', 'true');

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Google Drive API failed: ${res.status} ${text}`);
  }

  const json = JSON.parse(text);
  const files = json.files ?? [];

  if (files.length === 0) {
    console.log('No files found.');
    return;
  }

  for (const file of files) {
    console.log(`- ${file.name}`);
    console.log(`  id: ${file.id}`);
    console.log(`  type: ${file.mimeType}`);
    console.log(`  modified: ${file.modifiedTime}`);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});

const fs = require('fs');
const os = require('os');
const path = require('path');

async function start() {
  const anonymousTokenPath = path.resolve(os.tmpdir(), 'anonymous_token');
  if (!fs.existsSync(anonymousTokenPath)) {
    fs.writeFileSync(anonymousTokenPath, '', 'utf-8');
  }

  const generateConfig = require('@neteaseapireborn/api/generateConfig');
  await generateConfig();

  const { serveNcmApi } = require('@neteaseapireborn/api/server');
  await serveNcmApi({
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0',
    checkVersion: true,
  });
}

start().catch((error) => {
  console.error('[yesplaymusic-api] failed to start:', error);
  process.exit(1);
});

function extractToken(response) {
  let authToken = null;
  const cookie = response.headers && response.headers['set-cookie'];

  if (!cookie) {
    return null;
  }

  for (const item of cookie) {
    const parts = item.split(';');

    for (const part of parts) {
      const items = part.split('=');

      if (items.length !== 2) {
        continue;
      }
      if (items[0] === 'vod-web-auth-token' && item[1]) {
        authToken = items[1];
      }
    }
  }

  return authToken;
}

module.exports = {
  extractToken
};

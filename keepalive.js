require('http').createServer((req, res) => {
  res.end('CypherX bot is alive!');
}).listen(process.env.PORT || 3000, () => {
  console.log(`[CypherX] Keep-alive server running on port ${process.env.PORT || 3000}`);
});

setInterval(() => {}, 1000 * 60 * 60); // 1hr loop to keep process alive

process.on('SIGTERM', () => {
  console.log('[CypherX] SIGTERM received — shutting down...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('[CypherX] SIGINT received — shutting down...');
  process.exit(0);
});

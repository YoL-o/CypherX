setInterval(() => {}, 1000 * 60 * 60); // dummy loop to prevent idle shutdown

process.on('SIGTERM', () => {
  console.log('[CypherX] SIGTERM received — shutting down...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('[CypherX] SIGINT received — shutting down...');
  process.exit(0);
});

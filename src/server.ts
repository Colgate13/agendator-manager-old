import dotenv from 'dotenv';

dotenv.config();

process.env.TZ = 'Brazil/Sao_paulo';

process.on('SIGTERM', () => {
  console.log('> Server ending after close all connections - ', new Date().toISOString());
});

process.on('SIGINT', () => {
  console.log('> Server ending now! - ', new Date().toISOString());
  process.exit();
});
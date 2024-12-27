import startServer from './app';
import { logger } from './config/logger';

// Start HTTP server
startServer().then((app) => {
  const port = process.env.PORT || 8080;

  app.listen(port, () => {
    logger.info(`🚀 Server is running on http://localhost:${port}/graphql`);
  });
}).catch(err => {
  logger.error(`Error starting server: ${err.message}`);
});

'use strict';
/**
 * Local modules
 */
import app from './config/express'
import config from './config/config'
import { getLogger } from './config/logger'

/**
 * Init
 */
const logger  = getLogger('main')

const { app: { port } } = config

app.listen(port, () => {
  logger.info('Server started on port: %d', port);
});
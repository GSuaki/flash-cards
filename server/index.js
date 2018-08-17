/**
 * Module dependencies
 */
const folder = process.env.NODE_ENV == 'production' ? './build' : './app';

const { getLogger } = require(`${folder}/config/logger`);
const logger = getLogger('main')

require('babel-polyfill');

require(`${folder}/models`).sequelize.sync()
  .then(() => {
    logger.info("[*] Configured Sequelize")
    require(`${folder}/server`)
  })
  .catch(err => {
    logger.error(logger)
    throw err
  });
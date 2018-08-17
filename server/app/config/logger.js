import log4js from 'log4js'

if (process.NODE_ENV === 'test') {
  log4js.setGlobalLogLevel('OFF')
}

export function getLogger(name, level) {
  const logger = log4js.getLogger(name)
  logger.level = level || process.LOG_LEVEL || 'info';

  return logger
}

export default {
    getLogger
}
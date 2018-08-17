/**
 * NPM Modules
 */
import { omit } from 'ramda'
import jwt from 'express-jwt'
/**
 * Local modules
 */
import config from './config'
import { getLogger } from './logger'

/**
 * Init
 */
const logger = getLogger('auth')
const { jwt: { secret } } = config
const withoutStack = omit(['UnauthorizedError:'])

export function handle401(err, req, res, next) {
  if(err.name === 'UnauthorizedError') {
    res
      .status(401)
      .send({ message: err.message })
    
    logger.error(JSON.stringify(withoutStack(err)))
    return
  }
  
  next();
}

export function configureJwt() {
  return jwt({
    secret,
    requestProperty: 'auth'
  })
  .unless({
    path: ['/ping', '/auth', '/users']
  })
}

export default configureJwt
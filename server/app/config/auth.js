/**
 * NPM Modules
 */
import jwt from 'express-jwt'

/**
 * Local modules
 */
import config from './config'

/**
 * Init
 */
const { jwt: { secret } } = config

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
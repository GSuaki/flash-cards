/**
 * NPM Modules
 */
import jwt from 'jsonwebtoken'

/**
 * Local modules
 */
import config from '../config/config'

/**
 * Init
 */
export function sign(payload) {
  return jwt.sign(payload, config.jwt.secret)
}

export default {
  sign
}
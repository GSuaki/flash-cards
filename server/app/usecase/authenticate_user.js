import { omit, merge } from 'ramda'

import { sign } from '../helper/jwt'
import { compare } from '../helper/bcrypt'
import { findByLoginOrEmail } from '../database/repository/user'

const filterProperties = omit(['password', 'version', 'updated_at']);

class AuthError extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }

  static valueOf(message, attrs) {
    return merge(new AuthError(message), attrs)
  }
}

const checkPassword = pwd => user => {
  return compare(pwd, user.password)
    .then(matches => {
      if (!matches) {
        throw AuthError.valueOf('Password does not matches', { code: 'password.not.matches' })
      }
      
      return user
    })
    .catch(__ => {
      throw AuthError.valueOf('Password does not matches', { code: 'password.not.matches' })
    })
}

const validateUser = user => {
  if (!user) {
    throw AuthError.valueOf('User not found', { code: 'user.not.found' })
  }

  return user
}

const authenticated = res => user => {
  res
    .set({
      'Authorization': `Bearer ${sign(user)}`
    })
    .status(200)
    .send(user)
}

export function execute({ body: { login, pwd } }, res) {
  return findByLoginOrEmail(login)
    .then(validateUser)
    .then(checkPassword(pwd))
    .then(filterProperties)
    .then(authenticated(res))
    .catch(err => {
      res
        .status(401)
        .send(omit(['name'], err))
    })
}

export default {
  execute
}
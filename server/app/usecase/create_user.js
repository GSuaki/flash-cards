import { omit } from 'ramda'
import { hash } from '../helper/bcrypt'
import { create } from '../database/repository/user'

const omitPassword = omit(['password'])

export function execute(user) {
  return hash(user.password)
    .then(hash => create({ ...user, password: hash}))
    .then(user => user.get({
      plain: true
    }))
    .then(omitPassword)
}

export default {
  execute
}
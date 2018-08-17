import { Op } from 'sequelize'
import { User } from '../../models';

export function findAll(props = {}) {
  return User.findAll(props)
}

export function findByLoginOrEmail(login) {
  return User.findOne({
    where: {
      [Op.or]: [
        { login },
        { email: login }
      ]
    },
    raw: true
  })
}

export function findOne(where) {
  return User.findOne({ where })
    .then(row => {
      if (!row) {
        throw new Error('User not exists');
      }
      
      return row;
    })
}

export function create(obj = {}) {
  return User.create(obj)
}

export function destroy(props = {}) {
  return User.destroy(props)
}

export default {
  findAll,
  findOne,
  destroy,
  create,
  findByLoginOrEmail
}
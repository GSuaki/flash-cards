import bcrypt from 'bcrypt-nodejs'
import Promise from 'bluebird'

function salt() {
  return new Promise((resolve, __) => {
    bcrypt.genSalt(3, (err, result) => {
      if (err) return reject(err)
      resolve(result)
    })
  })
}

export function hash(pwd) {
  return salt()
    .then(salt => {
      return new Promise((resolve, reject) => {
        bcrypt.hash(pwd, salt, null, (err, pwdHash) => {
          if (err) return reject(err)
          resolve(pwdHash)
        })
      })
    })
}

export function compare(pwd, hash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(pwd, hash, (err, res) => {
      if (err) return reject(err)
      resolve(res)
    })
  })
}

export default {
  hash,
  compare
}
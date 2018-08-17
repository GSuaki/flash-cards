// #######################################
// NPM MODULES
// #######################################
import { Router } from 'express'
import validate from 'express-validation'
import { collectionValidation } from './validation'

import { plainValue } from '../helper/sequilize'
import { create, findAll } from '../database/repository/collection'

const router = Router()

router.get('/', ({ auth }, res) => {
  findAll({ 
    where: {
      user_id: auth.id
    },
    order: [['title', 'ASC']], 
    raw: true 
  })
    .then(data => res.send(data))
});

router.post('/', validate(collectionValidation), ({ body, auth }, res) => {
  create({ ...body, user_id: auth.id })
    .then(plainValue)
    .then(data => res.send(data))
});

export default router
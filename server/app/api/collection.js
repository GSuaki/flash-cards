// #######################################
// NPM MODULES
// #######################################
import { Router } from 'express'

import validate from 'express-validation'

import { collectionValidation } from './validation'
import { create, findAll } from '../database/repository/collection'

const router = Router()

router.get('/', (req, res) => {
  findAll({ order: [['title', 'ASC']] })
    .then(data => res.send(data))
});

router.post('/', validate(collectionValidation), ({ body }, res) => {    
  create(body)
    .then(data => res.send(data))
});

export default router
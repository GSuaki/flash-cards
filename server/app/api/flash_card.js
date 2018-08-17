// #######################################
// NPM MODULES
// #######################################
import { Router } from 'express'

import validate from 'express-validation'

import { plainValue } from '../helper/sequilize'
import { flashcardValidation } from './validation'
import { findAll, create } from '../database/repository/flash_card'

const router = Router()

router.get('/', (req, res) => {
  findAll({ 
    where: {
      collection_id: req.query.collection_id
    },
    order: [['front', 'ASC']], 
    raw: true 
  })
    .then(data => res.send(data))
});

router.post('/', validate(flashcardValidation), ({ body, auth }, res) => {    
  create(body)
    .then(plainValue)
    .then(data => res.send(data))
});

export default router
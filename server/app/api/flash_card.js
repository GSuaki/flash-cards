// #######################################
// NPM MODULES
// #######################################
import { Router } from 'express'

import validate from 'express-validation'

import { flashcardValidation } from './validation'
import { findAll, create } from '../database/repository/flash_card'

const router = Router()

router.get('/', (req, res) => {
  findAll({ order: [['front', 'ASC']] })
    .then(data => res.send(data))
});

router.post('/', validate(flashcardValidation), ({ body, auth }, res) => {    
  create(body)
    .then(data => res.send(data))
});

export default router
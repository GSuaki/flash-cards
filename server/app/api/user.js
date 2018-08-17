// #######################################
// NPM MODULES
// #######################################
import { Router } from 'express'

import validate from 'express-validation'

import { userValidation } from './validation'
import { execute as createUser } from '../usecase/create_user'

const router = Router()

router.post('/', validate(userValidation), ({ body }, res) => {    
  createUser(body)
    .then(data => res.send(data))
});

export default router
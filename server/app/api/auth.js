// #######################################
// NPM MODULES
// #######################################
import { Router } from 'express'
import validate from 'express-validation'

import { authValidation } from './validation'
import { execute as authenticateUser } from '../usecase/authenticate_user'

const router = Router()

router.post('/', validate(authValidation), authenticateUser);

export default router
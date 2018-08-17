/**
 * NPM modules
 */
import { Router } from 'express'
/**
 * Local modules
 */
import auth from './auth'
import collection from './collection'
import flashcard from './flash_card'
import ping from './ping'
import user from './user'

const router = Router();
router.use('/auth', auth);
router.use('/collections', collection);
router.use('/flash-cards', flashcard);
router.use('/ping', ping);
router.use('/users', user);

export default router;
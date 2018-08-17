/**
 * NPM modules
 */
import { Router } from 'express'
/**
 * Local modules
 */
import ping from './ping'
import flashcard from './flash_card'

const router = Router();
router.use('/ping', ping);
router.use('/flash-card', flashcard);

export default router;
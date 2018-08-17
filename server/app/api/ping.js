'use strict';

// #######################################
// NPM MODULES
// #######################################
import { Router } from 'express'

const router = Router()

router.get('/', (__, res) => {    
  res.json({ message: "OK", status: 200 });
});

export default router
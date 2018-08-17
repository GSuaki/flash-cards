'use strict';
/**
 * NPM modules
 */
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'

/**
 * Local modules
 */
import auth from './auth'
import routes from '../api/router'

/**
 * INIT
 */
const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true }));

app.use(auth())

app.use(cors({  
  credentials: true,
  origin: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type','Accept-Language','Authorization'],
  exposedHeaders: ['Authorization'] 
}));

app.use(routes)
app.disable('x-powered-by');

export default app
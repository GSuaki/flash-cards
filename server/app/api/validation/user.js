'use strict';

let Joi = require('joi');

module.exports = {
  options: { allowUnknownBody: true },
  body: {
    name: Joi.string().required(),
    email: Joi.string().required(),
    login: Joi.string().required(),
    password: Joi.string().required()
  }
};
'use strict';

let Joi = require('joi');

module.exports = {
  options: { allowUnknownBody: true },
  body: {
    login: Joi.string().required(),
    pwd: Joi.string().required()
  }
};
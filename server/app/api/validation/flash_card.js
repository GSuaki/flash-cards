'use strict';

let Joi = require('joi');

module.exports = {
  options: { allowUnknownBody: true },
  body: {
    title: Joi.string().required(),
    answer: Joi.string().required()
  }
};
'use strict';

let Joi = require('joi');

module.exports = {
  options: { allowUnknownBody: true },
  body: {
    front: Joi.string().required(),
    back: Joi.string().required(),
    collection_id: Joi.number().required()
  }
};
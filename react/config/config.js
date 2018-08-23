const envs = {
  'production': 'prod',
  'development': 'stage',
  'stage': 'stage'
};

const config = require(`./${envs[process.env.NODE_ENV]}.env.js`)

module.exports = Object.freeze(Object.assign({}, config))
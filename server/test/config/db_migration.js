'use strict';

import Umzug from 'umzug'
import * as db from '../../app/models'

export default new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize: db.sequelize
  },
  logging: false,
  migrations: {
    params: [ db.sequelize.getQueryInterface(), db.Sequelize ],
    path: process.cwd() + '/migrations',
    pattern: /^\d+[\w-]+\.js$/
  }
});
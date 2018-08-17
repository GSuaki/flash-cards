const defaultProps = {
  port: "3307",
  logging: false,
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 20,
    min: 0,
    idle: 20000,
    acquire: 20000
  }
};

const config = {
  development: {
    username: "root",
    password: "123456",
    database: "flashcards",
    host: "127.0.0.1"
  },
  test: {
    username: "root",
    password: '123456',
    database: "flashcards",
    host: "127.0.0.1",
    port: "3307"
  },
  production: {
    username: "root",
    password: '123456',
    database: "flashcards",
    host: "127.0.0.1",
    port: "3307"
  }
}

Object.keys(config)
  .forEach(key => config[key] = Object.assign({}, defaultProps, config[key]));

module.exports = Object.freeze(config);
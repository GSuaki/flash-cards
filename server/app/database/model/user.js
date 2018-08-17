'use strict'

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    login: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    password: {
      type:  DataTypes.STRING,
      allowNull: false
    }
  }, {
    version: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'user',
    indexes: [
      {
        unique: true,
        fields: ['email', 'login']
      }
    ]  
  });

  return User;
};
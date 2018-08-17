'use strict'

export default (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    version: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'collection'
  });

  return Collection;
};
'use strict'

export default (sequelize, DataTypes) => {
  const FlashCard = sequelize.define('FlashCard', {
    front: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    back: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    displayed_times: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    collection_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    version: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'flash_card'
  });

  return FlashCard;
};
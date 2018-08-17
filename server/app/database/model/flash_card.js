'use strict'

export default (sequelize, DataTypes) => {
  const FlashCard = sequelize.define('FlashCard', {
    title: DataTypes.STRING,
    answer: DataTypes.STRING
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'flash_card'
  });

  return FlashCard;
};
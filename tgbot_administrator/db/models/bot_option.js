'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bot_option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Bot, Chat }) {
      this.belongsTo(Bot, { foreignKey: 'bot_id' });
      this.belongsTo(Chat, { foreignKey: 'chat_id' });
      
    }
  }
  Bot_option.init({
    bot_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    timeout: DataTypes.INTEGER,
    chat_id: DataTypes.INTEGER,
    action: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Bot_option',
  });
  return Bot_option;
};

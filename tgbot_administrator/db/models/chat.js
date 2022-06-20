'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Bot, Bot_option }) {
      this.belongsToMany(Bot, {through: 'BotChats', foreignKey: 'chat_id'} )
      this.hasMany(Bot_option, {foreignKey: 'chat_id'})
    }
  }
  Chat.init(
    {
      name: DataTypes.STRING,
      chatId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Chat',
    }
  );
  return Chat;
};

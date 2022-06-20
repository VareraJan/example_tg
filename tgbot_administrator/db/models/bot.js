'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Chat, Bot_option }) {
      this.belongsToMany(Chat, {through: 'BotChats', foreignKey: 'bot_id'} )
      this.hasMany(Bot_option, { foreignKey: 'bot_id' });
    }
  }
  Bot.init(
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      token: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Bot',
    }
  );
  return Bot;
};

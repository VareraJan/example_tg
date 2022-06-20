'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bot_options', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bot_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Bots'
        },
        onDelete: 'CASCADE'
      },
      content: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING
      },
      timeout: {
        type: Sequelize.INTEGER
      },
      chat_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Chats'
        },
        onDelete: 'CASCADE'
      },
      action: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bot_options');
  }
};

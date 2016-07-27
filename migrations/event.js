'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('User', {
            id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: Sequelize.DATEONLY,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        system: {
            type: Sequelize.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        event: {
            type: Sequelize.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        }
    },{
            charset: 'utf8'
        }
    )}
};
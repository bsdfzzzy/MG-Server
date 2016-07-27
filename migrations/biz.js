'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('User', {
            id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        system: {
            type: Sequelize.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        column: {
            type: Sequelize.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        playStart: {
            type: Sequelize.TIME,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        playFinish: {
            type: Sequelize.TIME,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        numOfNeeds: {
            type: Sequelize.INTEGER,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        allReadyTime: {
            type: Sequelize.TIME,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        state: {
            type: Sequelize.BOOLEAN,
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
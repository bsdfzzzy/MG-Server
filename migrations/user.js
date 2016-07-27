'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('User', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            account: {
                type: Sequelize.STRING,
                unique: true,
                validate: {
                    notNull: true,
                    notEmpty: true,
                }
            },
            username: {
                type: Sequelize.STRING,
                validate: {
                    notNull: true,
                    notEmpty: true,
                }
            },
            password: {
                type: Sequelize.STRING,
                validate: {
                    notNull: true,
                    notEmpty: true,
                }
            },
            priority: {
                type: Sequelize.STRING,
                validate: {
                    notNull: true,
                    notEmpty: true,
                }
            },
            time: {
                type: Sequelize.DATE,
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
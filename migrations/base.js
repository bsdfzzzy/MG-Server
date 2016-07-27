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
        subsystem: {
            type: Sequelize.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        supervisor_1: Sequelize.STRING,
        supervisor_2: Sequelize.STRING,
        supervisor_3: Sequelize.STRING,
        respector: Sequelize.STRING,
        experiment: Sequelize.STRING,
        IP: {
            type: Sequelize.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        type: {
            type: Sequelize.STRING,
            validate: {
                notNull: true,
                notEmpty: true,
            }
        },
        work: Sequelize.TEXT,
        category: Sequelize.STRING,
        stateOrData: Sequelize.STRING,
        More: Sequelize.STRING
        },{
            charset: 'utf8'
        }
    )}
};
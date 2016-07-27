'use strict';

import fs from 'fs';
import path from 'path';
import logger from 'logger';
import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || "development",
    config = require(path.join(__dirname, '..', 'config', 'config.json'))[env],
    sequelize = new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        port: config.port,
        language: config.language
    });

const models = ["User", "Base", "Event", "Biz"];

models.forEach(model => {
    module.exports[model] = sequelize.import(__dirname + '/' + model.toLowerCase());
});

sequelize.sync().error(error => {
    logger.error(error);
    throw error;
})

export {sequelize};
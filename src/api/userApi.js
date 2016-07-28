var router = require('koa-router')();
const sequelize = require('../../models/index');
const User = sequelize.sequelize.models.users;
const findAll = require('../utils/findAll');
const addOne = require('../utils/addOne');

router.get('/getAll', findAll(User));
router.post('/addOne', addOne(User));

module.exports = router;
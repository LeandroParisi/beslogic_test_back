const BaseRouter = require('../Entities/BaseRouter');
const ItemsController = require('./ItemsController');

const ItemsRouter = new BaseRouter('/items', ItemsController.getRoutes());

module.exports = ItemsRouter;

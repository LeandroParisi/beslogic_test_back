const ItemsService = require('../../services/ItemsServices/ItemsServices');

const BaseController = require('../Entities/BaseController');

class Controller extends BaseController {

}

const ItemsController = new Controller(ItemsService);


module.exports = ItemsController;

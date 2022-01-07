const { Items } = require('../../models');
const BaseService = require('../Entities/BaseService');
const ItemsQueries = require('../../queries/ItemsQueries/ItemsQueries');

class ItemsServices extends BaseService {
// No need to be extended yet
}

const ItemsService = new ItemsServices(Items, ItemsQueries);

module.exports = ItemsService;

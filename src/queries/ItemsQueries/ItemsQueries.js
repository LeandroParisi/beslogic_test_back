/* eslint-disable class-methods-use-this */

const {
  Features,
} = require('../../models');
const queryWhereFactory = require('../helpers/Factories/queryWhereFactory');

const QueryInterface = require('../Entities/QueryInterface');

class ItemsQueries extends QueryInterface {

  findAll({ query }) {
  const sequelizedQuery = queryWhereFactory(query, { table: 'Items' });

    return { 
      where: sequelizedQuery,
      include: [
        {
          model: Features,
          as: 'ItemFeatures',
          through: { attributes: [] },
        }
      ]
    };
  }
}

const ItemsQuery = new ItemsQueries();

module.exports = ItemsQuery;

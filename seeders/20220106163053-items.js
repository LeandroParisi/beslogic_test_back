'use strict';
const { v4: uuid } = require('uuid');

const itemOneId = uuid();
const itemTwoId = uuid();

const featureOne = uuid()
const featureTwo = uuid()
const featureThree = uuid()

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('items', [
      {
        id: itemOneId,
        item_name: "Lake House",
        price: 100,
        image: 'https://media.istockphoto.com/photos/summer-holidays-in-finland-picture-id1148294777?k=20&m=1148294777&s=612x612&w=0&h=Ax8xwUmMJF52lAX6I8MuDPMpZhz1p3emKyWe-DE63_A='
      },
      {
        id: itemTwoId,
        item_name: "Building",
        price: 150,
        image: 'https://media.istockphoto.com/photos/low-angle-of-tall-building-in-manhattan-picture-id1291177121?b=1&k=20&m=1291177121&s=170667a&w=0&h=aI1PkWS_GkXJ4Qz0gz2cTOud95SS4hUa4iZc1kqWYL4='
      },
    ])

    await queryInterface.bulkInsert('features', [
      {
        id: featureOne,
        feature: "Pool",
      },
      {
        id: featureTwo,
        feature: "Sauna",
      },
      {
        id: featureThree,
        feature: "Playground",
      },
    ])


    await queryInterface.bulkInsert('items_features', [
      {
        id: 1,
        item_id: itemOneId,
        feature_id: featureTwo,
      },
      {
        id: 2,
        item_id: itemOneId,
        feature_id: featureThree,
      },
      {
        id: 3,
        item_id: itemTwoId,
        feature_id: featureTwo
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('items', null, {});
    await queryInterface.bulkDelete('features', null, {});
    await queryInterface.bulkDelete('items_features', null, {});
  },
};

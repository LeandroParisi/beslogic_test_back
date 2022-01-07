/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const {v4: uuid} = require('uuid')

const createItems = (sequelize, DataTypes) => {
  const Items = sequelize.define('Items', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    itemName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    image: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    isActive: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, { underscored: true });

  Items.beforeCreate((item) => {
    item.id = uuid();
  });
  Items.associate = (models) => {
    Items.belongsToMany(models.Features, {
      through: 'ItemsFeatures',
      as: 'ItemFeatures',
    });
  }

  return Items;
};

module.exports = createItems;

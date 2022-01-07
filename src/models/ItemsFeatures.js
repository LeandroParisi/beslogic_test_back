/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createItems = (sequelize, DataTypes) => {
  const ItemsFeatures = sequelize.define('ItemsFeatures', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    item_id: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    feature_id: {
      allowNull: false,
      type: DataTypes.UUID,
    },
  }, { underscored: true });

  return ItemsFeatures;
};

module.exports = createItems;

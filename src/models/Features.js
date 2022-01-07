/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const createFeatures = (sequelize, DataTypes) => {
  const Features = sequelize.define('Features', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    feature: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, { underscored: true });

  Features.associate = (models) => {
    Features.belongsToMany(models.Items, {
      through: 'ItemsFeatures',
      as: 'ItemFeatures',
    });
  }
  return Features;
};

module.exports = createFeatures;

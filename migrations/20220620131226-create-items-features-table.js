module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('items_features', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true
        },
        item_id: {
          allowNull: false,
          type: Sequelize.UUID,
          foreignKey: true,
          type: Sequelize.UUID,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'items',
            key: 'id',
          },
        },
        feature_id: {
          allowNull: false,
          type: Sequelize.UUID,
          foreignKey: true,
          type: Sequelize.UUID,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          references: {
            model: 'features',
            key: 'id',
          },
        },
      }, { transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('items_features');
  },
};

const OrderItems = (sequelize, Sequelize) => {
  const orderItems = sequelize.define(
    "orderItem",
    {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      pId: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      userId: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      orderId: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },

      quantity: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 1,
      },

      price: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      paranoid: true,
      deletedAt: "deleted_at",
    },
    { freezeTableName: true }
  );
  return orderItems;
};

export default OrderItems;

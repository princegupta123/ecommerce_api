const Order = (sequelize, Sequelize) => {
  const order = sequelize.define("order", {

    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    status: {
      type: Sequelize.BIGINT,
      allowNull: false,
      defaultValue: "0",
      enum: ["pending", "placed", "shipped", "delievered"],
    },

    totalPrice:{
      type: Sequelize.BIGINT,
      allowNull: false,
    },

    address:{
      type: Sequelize.STRING,
      allowNull: false,
    },

  paymentMode:{
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "0",
    enum : ["CASH ON DELIEVERY", "ONLINE"]
  },
    userId:{
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    
  },{
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    paranoid: true,
    deletedAt: "deleted_at",
  },
  { freezeTableName: true }
  
  );
  return order;
};

export default Order;

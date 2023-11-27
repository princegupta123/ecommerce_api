const Cart = (sequelize, Sequelize) => {
    const cart = sequelize.define("cart", {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      pId: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
     
      quantity: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 1
      },

      userId: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },

    });
    return cart;
  };
  
  export default Cart;
  
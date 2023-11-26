const Product = (sequelize, Sequelize) => {
    const product = sequelize.define("product", {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: {
          args: true,
          msg: "ID already in use!",
        },
      },
  
      pName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
  
      pDescription: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
     
      pCategory: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
  
      price: {
          type: Sequelize.BIGINT,
          allowNull: false,
      },
      pDiscountPrice: {
        type: Sequelize.BIGINT,
        allowNull: true,
    },
    });
    return product;
  };
  
  export default Product;
  
const ProductImages = (sequelize, Sequelize) => {
    const productImages = sequelize.define("productImages", {
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
     
      image: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },

    });
    return productImages;
  };
  
  export default ProductImages;
  
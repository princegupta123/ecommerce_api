const Category = (sequelize, Sequelize) => {
    const category = sequelize.define("category", {
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
    return category;
  };
  
  export default Category;
  
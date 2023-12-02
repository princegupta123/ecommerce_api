const Category = (sequelize, Sequelize) => {
    const category = sequelize.define("category", {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
     
    });
    return category;
  };
  
  export default Category;
  
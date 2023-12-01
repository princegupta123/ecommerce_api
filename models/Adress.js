const Address = (sequelize, Sequelize) => {
    const address = sequelize.define("address", {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
    return address;
  };
  
  export default Address;
  
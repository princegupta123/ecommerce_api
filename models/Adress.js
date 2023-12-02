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

      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sector: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      place: {
        type: Sequelize.STRING,
        allowNull: false,
      }
      
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
  
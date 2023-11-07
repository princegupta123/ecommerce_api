const Otp = (sequelize, Sequelize) => {
    const otp = sequelize.define("otp", {
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

      mobile: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
     
      otp: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },

    });
    return otp;
  };
  
  export default Otp;
  
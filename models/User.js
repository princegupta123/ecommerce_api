const User = (sequelize, Sequelize) => {
  const user = sequelize.define("user", {
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

    name: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },

    email: {
      type: Sequelize.STRING(255),
      allowNull: true,
      isEmail: {
        args: true,
        msg: "Please enter valid email",
      },
    },
    mobile: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
   
    profilePic: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },

    role: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue : '0',
        enum: ["0", "1"]
    },
  });
  return user;
};

export default User;

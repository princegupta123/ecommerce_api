import { Sequelize } from "sequelize";
import User from "./User.js";
import Otp from "./Otp.js"
const sequelize = new Sequelize("ecom", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("DB connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database: ", err);
  });
  sequelize.sync({force: true});


const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = User(sequelize, Sequelize);
db.otp = Otp(sequelize, Sequelize);
export default db;
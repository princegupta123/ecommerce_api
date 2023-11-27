import { Sequelize } from "sequelize";
import User from "./User.js";
import Otp from "./Otp.js";
import Product from "./Product.js";
import ProductImages from "./ProductImages.js";
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
  sequelize.sync({force: false});


const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = User(sequelize, Sequelize);
db.otp = Otp(sequelize, Sequelize);
db.product = Product(sequelize, Sequelize);
db.productImages = ProductImages(sequelize,Sequelize);


//association
db.product.hasMany(db.productImages, { as: 'images', foreignKey: 'pId' });
db.productImages.belongsTo(db.product, { foreignKey: 'pId' });

export default db;
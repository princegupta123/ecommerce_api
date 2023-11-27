import db from "../models/index.js";
const Product = db.product;
// const ProductImages = db.productImages;

export const getAllProduct = async (req, res) => {
  try {
       const products = await Product.findAll({
        include : 'images'
       });

       res.status(200).send({
        message: 'Successfully fetch all products',
        success : true,
        data: products
       })

  } catch (error) {
    console.log(error);
    res.status(500).send({
        message: 'Error while getting products',
        success : false,
        error: error
    })
  }
};

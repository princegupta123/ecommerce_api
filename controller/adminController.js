import db from "../models/index.js";
const ProductImage = db.productImages;
const Product = db.product;

export const addProduct = async (req, res) => {
  try {
    const name = req.body.pName;
    const desc = req.body.pDescription;
    const category = req.body.pCategory;
    const price = req.body.price;
    const discountPrice = req.body.discountPrice;

    const newProduct = await Product.create({
      pName: name,
      pDescription: desc,
      price: price,
      pCategory: category,
      pDiscountPrice: discountPrice,
    });

    if (newProduct) {
      const images = req.files?.map((file) => ({
        pId: newProduct.id,
        image: file.path,
      }));

      console.log(images, "///////");
      const productImages = await ProductImage.bulkCreate(images);

      return res.status(200).json({
        message: "Product added successfully",
        success: true,
        data: { newProduct, productImages },
      });
    } else {
      return res.status(200).json({
        message: "Unable to add product, please try again",
        success: false,
        data: null,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error while creating a new product",
      success: false,
      error: error,
    });
  }
};


export const updateProduct = async (req, res) => {
    try {
      const { productId, pName, pDescription, price, pCategory, discountPrice } = req.body;
  
      
      const updatedProduct = await Product.update(
        { pName, pDescription, price, pCategory, pDiscountPrice: discountPrice },
        { where: { id: productId } }
      );
  
      if (updatedProduct > 0) {
      
        const images = req.files?.map((file) => ({
          pId: productId,
          image: file.path,
        }));
        console.log(images, "jnwj");
        
        await ProductImage.destroy({ where: { pId: productId } });
  
        const productImages = await ProductImage.bulkCreate(images);
  
         res.status(200).json({
          message: 'Product updated successfully',
          success: true,
          data: { updatedProduct, productImages },
        });
      } else {
        return res.status(404).json({
          message: 'Product not found',
          success: false,
          data: null,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'Error while updating the product',
        success: false,
        error: error,
      });
    }
  };

  export const deleteProduct = async(req, res)=>{
    try {
        const { productId } = req.params;
        const existingProduct = await Product.findByPk(productId);
    
        if (!existingProduct) {
          return res.status(404).json({
            message: 'Product not found',
            success: false,
            data: null,
          });
        }
    
        await Product.destroy({ where: { id: productId } });
        await ProductImage.destroy({ where: { pId: productId } });
    
        return res.status(200).json({
          message: 'Product deleted successfully',
          success: true,
          data: null,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error while deleting the product',
            success: false,
            data: null,
          });
    }
  }
import db from "../models/index.js";
const ProductImage = db.productImages;
const Product = db.product; 

export const addProduct =async(req, res)=>{
    try {
        const {pName, pDescription, price, pCategory, discountPrice} = req.body; 
        const newProduct = await Product.create(req.body);

        if(newProduct){
            const images = req.files?.map((file) => ({
                pId: newProduct.id,
                image: file.path,
              }));

            console.log(images,"///////")
            const productImages = await ProductImage.bulkCreate(images);

            return res.status(200).json({
                message: 'Product added successfully',
                success : true,
                data: {newProduct, productImages}
            })
       }
       else{
        return res.status(200).json({
            message: 'Unable to add product, please try again',
            success : false,
            data: null
        })
       }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error while creating a new product',
            success : false,
            error: error
        })
    }
}
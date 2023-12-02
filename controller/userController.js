import db from "../models/index.js";
const Product = db.product;
const Cart = db.cart;
const ProductImages = db.productImages;
const User = db.user;
const Order = db.order;
const OrderItems = db.orderItems;

export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: "images",
    });

    res.status(200).send({
      message: "Successfully fetch all products",
      success: true,
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error while getting products",
      success: false,
      error: error,
    });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity, userId } = req.body;

    const existingProduct = await Product.findOne({
      where: {
        id: productId,
      },
    });

    if (!existingProduct) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
        data: null,
      });
    }
    let cartItem = await Cart.findOne({
      where: { pId: productId, userId: userId },
    });
    if (cartItem) {
      cartItem = await Cart.update(
        { quantity: quantity },
        { where: { pId: productId, userId: userId } }
      );
    } else {
      cartItem = await Cart.create({
        pId: productId,
        quantity: quantity,
        userId: userId,
      });
    }

    return res.status(200).json({
      message: "Product added to the cart successfully",
      success: true,
      data: cartItem,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error while adding products to cart",
      success: false,
      error: error,
    });
  }
};

export const getCart = async (req, res) => {
  try {
    const { userId } = req.query;
    const cartItem = await Cart.findAll({
      where: {
        userId: userId,
      },
      include: [
        {
          model: Product,
          include: [{ model: ProductImages, as: "images" }],
        },
        { model: User },
      ],
    });
    res.status(200).send({
      message: "Cart Item fetched successfully",
      success: true,
      data: cartItem,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error while getting products from cart",
      success: false,
      error: error,
    });
  }
};

export const deleteCartItem = async (req, res) => {
  try {
    const { productId } = req.params;
    const existingCartItem = await Cart.findOne({
      where: {
        pId: productId,
        userId: req.currUser.id,
      },
    });

    if (!existingCartItem) {
      return res.status(404).json({
        message: "Cart item not found",
        success: false,
        data: null,
      });
    }

    await existingCartItem.destroy();

    return res.status(200).json({
      message: "Cart item deleted successfully",
      success: true,
      data: null,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error while deleting products from cart",
      success: false,
      error: error,
    });
  }
};

export const orderController = async (req, res) => {
  try {
    const { pId, totalPrice, userId, address, paymentMode, quantity, price } =
      req.body;
    let order = await Order.create({
      userId: userId,
      paymentMode: paymentMode,
      address: address,
      totalPrice: totalPrice,
    });
    let orderItem;
    if (order) {
       orderItem = await OrderItems.create({
        pId: pId,
        userId: userId,
        orderId: order?.id,
        quantity: quantity,
        price: price,
      });
    }

    return res.status(200).json({
      message: "Order created successfully",
      success: true,
      data: { order, orderItem },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error while order products",
      success: false,
      error: error,
    });
  }
};


export const getOrders = async(req, res)=>{
  try {
    let orders = await Order.findAll({
      where: {
        userId: 1
      },
      include: [
        {
          model: OrderItems,
          as: 'items',
          include: [
            {
              model: Product,
              include: [
                {
                  model: ProductImages,
                  as: 'images',
                },
              ],
            }
          ]
        }
      ]
    })

    res.status(200).send({
      message: 'Order fetched successfully',
      success: true,
      data: {orders}
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error while getting order products",
      success: false,
      error: error,
    });
  }
}
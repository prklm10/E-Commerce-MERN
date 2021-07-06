const Cart = require('../model/cartModel');

exports.addToCart = async (req, res) => {
  console.log(req.body);
  const {
    userId,
    productId,
    quantity,
    name,
    price,
    src,
  } = req.body;

  //TODO: the logged in user id

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      //cart exists for user
      const itemIndex = cart.products.findIndex(
        (p) => p.productId === productId
      );

      if (itemIndex > -1) {
        //product exists in the cart, update the quantity
        const productItem =
          cart.products[itemIndex];
        productItem.quantity = quantity;
        cart.products[itemIndex] = productItem;
      } else {
        //product does not exists in cart, add new item
        cart.products.push({
          productId,
          quantity,
          name,
          price,
          src,
        });
      }
      cart = await cart.save();
      return res.status(201).json({
        status: 'Ok',
        data: {
          cart,
        },
      });
    }
    //no cart for user, create new cart
    const newCart = await Cart.create({
      userId,
      products: [
        { productId, quantity, name, price, src },
      ],
    });

    return res.status(201).json({
      status: 'Ok',
      data: {
        newCart,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'Fail',
      message: err.message,
    });
  }
};

exports.getCart = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(userId);
    const cart = await Cart.findOne({ userId });
    if (cart) {
      return res.status(200).json({
        status: 'Ok',
        data: {
          cart,
        },
      });
    }
    res.status(200).json({
      status: 'Ok',
      data: null,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'Fail',
      message: err.message,
    });
  }
};

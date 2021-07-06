const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [
      true,
      'Please Enter Product Name!',
    ],
    trim: true,
  },
  src: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    required: [
      true,
      'Please Enter Product Description!',
    ],
  },
  brand: {
    type: String,
    required: [
      true,
      'Please Enter Product Brand!',
    ],
    trim: true,
  },
  category: {
    type: String,
    trim: true,
    required: [
      true,
      'Please Enter Product Category!',
    ],
  },
  price: {
    type: Number,
    required: [
      true,
      'Please Enter Product Price!',
    ],
  },
  countInStock: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
});

const shopData = mongoose.model(
  'userdata',
  dataSchema
);
module.exports = shopData;

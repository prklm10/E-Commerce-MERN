const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter Your Name!'],
    trim: true,
  },
  username: {
    type: String,
    required: [
      true,
      'Please Enter Your Username',
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [
      true,
      'Please Enter Your Password',
    ],
  },
});

const Admin = mongoose.model(
  'admin',
  adminSchema
);
module.exports = Admin;

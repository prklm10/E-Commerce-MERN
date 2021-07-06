const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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

const User = mongoose.model('users', userSchema);
module.exports = User;

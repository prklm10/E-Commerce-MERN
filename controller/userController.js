const User = require('../model/userModel');

exports.addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      status: 'Ok',
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail',
      message: err.message,
    });
  }
};
exports.userLogin = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.find({
      username: req.body.username,
    });
    const userId = await User.find(
      {
        username: req.body.username,
      },
      { _id: 1 }
    );
    console.log(userId);
    //console.log(user);
    if (!user || user.length === 0) {
      res.status(403).json({
        status: 'Fail',
        message: 'Username not found',
      });
    } else if (
      user[0].password !== req.body.password
    ) {
      res.status(403).json({
        status: 'Fail',
        message: 'Incorrect Password',
      });
    } else {
      res.status(201).json({
        status: 'Ok',
        message: 'Login Successful',
        data: {
          userId,
        },
      });
    }
  } catch (err) {
    res.status(403).json({
      status: 'Fail',
      message: err.message,
    });
  }
};

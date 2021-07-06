const Admin = require('../model/adminModel');

exports.adminLogin = async (req, res) => {
  try {
    console.log(req.body);
    const admin = await Admin.find({
      username: req.body.username,
    });
    //console.log(admin);
    if (!admin || admin.length === 0) {
      res.status(403).json({
        status: 'Fail',
        message: 'Username not found',
      });
    } else if (
      admin[0].password !== req.body.password
    ) {
      res.status(403).json({
        status: 'Fail',
        message: 'Incorrect Password',
      });
    } else {
      res.status(201).json({
        status: 'Ok',
        message: 'Login Successful',
      });
    }
  } catch (err) {
    res.status(403).json({
      status: 'Fail',
      message: err.message,
    });
  }
};
exports.addAdmin = async (req, res) => {
  try {
    console.log(req.body);
    const admin = await Admin.create(req.body);
    res.status(201).json({
      status: 'Ok',
      data: {
        admin,
      },
    });
  } catch (err) {
    res.status(403).json({
      status: 'Fail',
      message: err.message,
    });
  }
};

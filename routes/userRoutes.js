const express = require('express');

const userController = require('../controller/userController');

const router = express.Router();

router.route('/').post(userController.addUser);

router
  .route('/login')
  .post(userController.userLogin);

module.exports = router;

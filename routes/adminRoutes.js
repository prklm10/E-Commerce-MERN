const express = require('express');

const adminController = require('../controller/adminController');

const router = express.Router();

router.route('/').post(adminController.addAdmin);

router
  .route('/login')
  .post(adminController.adminLogin);
module.exports = router;

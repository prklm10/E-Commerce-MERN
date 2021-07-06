const express = require('express');

const paymentController = require('../controller/paymentController');

const router = express.Router();

router.route('/').post(paymentController.payment);

module.exports = router;

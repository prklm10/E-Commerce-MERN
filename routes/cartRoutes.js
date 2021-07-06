const express = require('express');

const cartController = require('../controller/cartController');

const router = express.Router();
router.route('/').post(cartController.addToCart);

router.route('/:id').get(cartController.getCart);

module.exports = router;

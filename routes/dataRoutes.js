const express = require('express');

const shopDataController = require('../controller/shopDataController');

const router = express.Router();

router
  .route('/')
  .get(shopDataController.getItems)
  .post(shopDataController.addItems);
router
  .route('/:id')
  .get(shopDataController.getItem)
  .patch(shopDataController.updateItem)
  .delete(shopDataController.deleteItem);
module.exports = router;

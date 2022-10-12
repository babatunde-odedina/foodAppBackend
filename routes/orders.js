const express = require('express');
const {
  createOrder,
  getSingleOrder,
  getOrders,
  deleteOrder,
  updateOrder,
} = require('../controllers/orderController');

const router = express.Router();

// GET all Orders
router.get('/', getOrders);

// GET a Single Order
router.get('/:id', getSingleOrder);

// POST a new Order
router.post('/', createOrder);

// DELETE an Order
router.delete('/:id', deleteOrder);

// UPDATE an Order
router.patch('/:id', updateOrder);

module.exports = router;

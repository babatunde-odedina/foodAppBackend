const Order = require('../models/orderModel');
const mongoose = require('mongoose');

// GET all Orders
const getOrders = async (req, res) => {
  const orders = await Order.find({}).sort({ createdAt: -1 });

  res.status(200).json(orders);
};

// GET a Single Order
const getSingleOrder = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Order not available' });
  }

  const order = await Order.findById(id);

  if (!order) {
    return res.status(404).json({ error: 'Order not available' });
  }
  res.status(200).json(order);
};

// Create a new Order
const createOrder = async (req, res) => {
  const { name, orders, total } = req.body;
  // add to DB
  try {
    const order = await Order.create({ name, orders, total });
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE an Order
const deleteOrder = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Order not available' });
  }

  const order = await Order.findOneAndDelete({ _id: id });

  if (!order) {
    return res.status(404).json({ error: 'Order not available' });
  }
  res.status(200).json(order);
};

// UPDATE an Order
const updateOrder = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Order not available' });
  }

  const order = await Order.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!order) {
    return res.status(404).json({ error: 'Order not available' });
  }
  res.status(200).json(order);
};

module.exports = {
  createOrder,
  getOrders,
  getSingleOrder,
  deleteOrder,
  updateOrder,
};

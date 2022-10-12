const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    orders: [{ food: String, price: Number }],
    total: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);

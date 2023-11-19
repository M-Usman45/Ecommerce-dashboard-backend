const mongoose = require("mongoose");
const Joi = require("joi"); // Don't forget to import Joi

// Define the order schema
const orderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    required: true,
  },
  customer_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // You can add email validation using Joi here
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // Reference to the Product model
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1, // Quantity should be at least 1
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Price should not be negative
  },
  order_date: {
    type: Date,
    required: true,
  },
});

// Create a model from the schema
const Order = mongoose.model("Order", orderSchema);

// Function to validate an order object against the schema
function validateOrder(order) {
  const schema = Joi.object({
    order_id: Joi.string().required(),
    customer_name: Joi.string().required(),
    email: Joi.string().email().required(),
    product_id: Joi.string().required(), // Assuming product_id is a string
    product_name: Joi.string().required(),
    quantity: Joi.number().min(1).required(),
    price: Joi.number().min(0).required(),
    order_date: Joi.date().required(),
  });
  return schema.validate(order);
}

module.exports.Order = Order;
module.exports.OrderSchema = orderSchema;
module.exports.validateOrder = validateOrder;

const express = require("express");
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderById,
  deleteOrderById,
} = require("../controllers/orders");

// Create a new order
router.post("/", createOrder);

// Get all orders
router.get("/", getAllOrders);

// Get order by ID
router.get("/:id", getOrderById);

// Update order by ID
router.put("/:id", updateOrderById);

// Delete order by ID
router.delete("/:id", deleteOrderById);

module.exports = router;

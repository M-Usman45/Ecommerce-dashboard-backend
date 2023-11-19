const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProduct,
  readAllProducts,
  updateProduct,
} = require("../controllers/products");
const upload = require("../middlewares/multer");

// Create a new product
router.post("/", upload.single("image"), createProduct);

// Get a single product by ID
router.get("/:id", getProduct);

// Read all products with filtering, sorting, and searching
router.get("/", readAllProducts);

// Update a product by ID
router.put("/:id", updateProduct);

module.exports = router;

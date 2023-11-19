const mongoose = require("mongoose");
const Joi = require("joi"); // Don't forget to import Joi

// Define the product schema
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Price should not be negative
  },
  stock: {
    type: Number,
    required: true,
    min: 0, // Stock should not be negative
  },
  image: {
    type: String,
    // required: true,
  },
  category: {
    type: String,
    // required: true,
  },
});

// Create a model from the schema
const Product = mongoose.model("Product", productSchema);

// Function to validate a product object against the schema
function validateProduct(product) {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().min(0).required(),
    stock: Joi.number().min(0).required(),
    // image: Joi.string().required(),
    // category: Joi.string().required(),
  });
  return schema.validate(product);
}

module.exports.Product = Product;
module.exports.ProductSchema = productSchema;
module.exports.validateProduct = validateProduct;

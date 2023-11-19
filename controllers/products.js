const { Product, validateProduct } = require("../models/product");

// Controller function to create a new product with image upload
const createProduct = async (req, res) => {
  const { error } = await validateProduct(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const product = new Product({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      image: req?.file?.path, // Save the path to the uploaded image
      category: req.body.category,
    });

    await product.save();
    return res.send(product);
};

// Controller function to get a single product by ID
const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send("Product not found.");
    }
    return res.send(product);
  } catch (err) {
    return res.status(500).send("Error fetching the product.");
  }
};

// Controller function to read all products with filtering, sorting, and searching
const readAllProducts = async (req, res) => {
  // Your implementation for filtering, sorting, and searching here
  try {
    const products = await Product.find();
    return res.send(products);
  } catch (err) {
    return res.status(500).send("Error fetching products.");
  }
};

// Controller function to update a product by ID
const updateProduct = async (req, res) => {
  // Validate the incoming request data
  console.log("req.body", req.body);
  const { error } = validateProduct(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        productName: req.body.productName,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        image: req.body.image,
        title: req.body.title,
        category: req.body.category,
      },
      { new: true }
    );

    if (!product) {
      return res.status(404).send("Product not found.");
    }

    return res.send(product);
  } catch (err) {
    return res.status(500).send("Error updating the product.");
  }
};

module.exports = {
  getProduct,
  readAllProducts,
  updateProduct,
  createProduct,
};

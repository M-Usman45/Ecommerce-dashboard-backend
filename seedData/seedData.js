const mongoose = require("mongoose");
const productData = require("./dummyProducts"); //
const { OrderSchema } = require("../models/order");

mongoose.connect(
  "mongodb+srv://muhammadusmanameer45:123usman123@ecommerce.porx4hv.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const Product = mongoose.model("Order", OrderSchema);

Product.insertMany(productData)
  .then((result) => {
    console.log(`${result.length} documents inserted successfully.`);
  })
  .catch((error) => {
    console.error("Error inserting documents:", error);
  })
  .finally(() => {
    mongoose.connection.close();
  });

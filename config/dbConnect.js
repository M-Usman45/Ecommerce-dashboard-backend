const mongoose = require("mongoose");

// Replace 'YOUR_CONNECTION_STRING' with the actual MongoDB Atlas connection string
const dbUrl =
  "mongodb+srv://muhammadusmanameer45:123usman123@ecommerce.porx4hv.mongodb.net/?retryWrites=true&w=majority";
const dbConnect = () => {

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});
}

module.exports = dbConnect

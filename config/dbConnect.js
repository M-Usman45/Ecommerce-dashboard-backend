const mongoose = require("mongoose");

// Replace 'YOUR_CONNECTION_STRING' with the actual MongoDB Atlas connection string

const dbConnect = () => {
  const dbUrl = `mongodb+srv://${process.env.MONGODB_URI_USER_NAME}:${process.env.MONGODB_URI_PASSWORD}@ecommerce.porx4hv.mongodb.net/?retryWrites=true&w=majority`;
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
};

module.exports = dbConnect;

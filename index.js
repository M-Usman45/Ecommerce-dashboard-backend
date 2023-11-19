const express = require("express");
const dbConnect = require("./config/dbConnect");
const products = require("./routes/products");
const orders = require("./routes/orders");
const reports = require("./routes/reports");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const cors = require("cors");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/products", products);
app.use("/api/orders", orders);
app.use("/api/reports", reports);
dbConnect();

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

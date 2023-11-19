const { Order } = require("../models/order"); // Import the Order model

const generateReports = async (req, res) => {
  try {
    // Get the category query parameter from the request
    const category = req.query.category;

    // Create a filter object based on the category parameter
    const filter = category ? { category } : {};

    const reports = await Order.aggregate([
      {
        $lookup: {
          from: "products", // Replace 'products' with the actual name of your products collection
          localField: "product_id",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $unwind: "$product",
      },
      {
        $match: {
          "product.category": filter.category, // Match orders with the same product category
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$order_date" } },
          totalOrders: { $sum: 1 },
          totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json(reports);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error generating reports" });
  }
};



module.exports = {
  generateReports,
};

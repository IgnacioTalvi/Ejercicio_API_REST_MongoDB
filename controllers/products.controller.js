const Provider = require("../models/products.model");

async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getAllProducts,
  //   createProducts,
  //   updateProducts,
  //   deleteProducts,
};

const Provider = require("../models/providers.model");

async function getAllProviders(req, res) {
  try {
    const providers = await Provider.find();
    res.status(200).json(providers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { getAllProviders };

const Provider = require("../models/providers.model");

async function getAllProviders(req, res) {
  try {
    const providers = await Provider.find();
    res.status(200).json(providers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function createProvider(req, res) {
  try {
    const { company_name, CIF, address, url_web } = req.body;

    const newProvider = new Provider({
      company_name,
      CIF,
      address,
      url_web,
    });

    const savedProvider = await newProvider.save();

    res.status(201).json({
      message: "Proveedor creado",
      provider: savedProvider,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { getAllProviders, createProvider };

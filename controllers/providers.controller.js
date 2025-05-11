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

async function updateProvider(req, res) {
  try {
    const { id } = req.params;
    const { company_name, CIF, address, url_web } = req.body;

    const updatedProvider = await Provider.findByIdAndUpdate(
      id,
      {
        company_name,
        CIF,
        address,
        url_web,
      },
      { new: true }
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const deleteProvider = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProvider = await Provider.findByIdAndDelete(id);

    if (!deletedProvider) {
      return res.status(404).send("Proveedor no encontrado");
    }
    res.status(200).send("Proveedor eliminado: " + id);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al intentar borrar el proveedor" });
  }
};

module.exports = {
  getAllProviders,
  createProvider,
  updateProvider,
  deleteProvider,
};

const mongoose = require("mongoose");
require("../config/db_mongo");

const objectSchema = {
  company_name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  CIF: {
    type: Number,
    required: true,
    maxlength: 100,
  },
  address: {
    type: String,
    required: true,
    maxlength: 200,
  },
  url_web: {
    type: String,
    required: false,
    maxlength: 800,
    unique: true,
  },
};

//Creamos el schema
const providerSchema = mongoose.Schema(objectSchema, { versionKey: false });

//Creamos el modelo --> Colección
const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;

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
  url_web: {
    type: String,
    required: false,
    maxlength: 800,
    unique: true,
  },
};

//Creamos el schema
const offerSchema = mongoose.Schema(objectSchema, { versionKey: false });

//Creamos el modelo --> Colección
const Offer = mongoose.model("Provider", offerSchema);

module.exports = Offer;

// company_name
// CIF
// address
// url_web

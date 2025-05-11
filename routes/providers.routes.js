const express = require("express");
const router = express.Router();
const providersController = require("../controllers/providers.controller");

router.get("/", providersController.getAllProviders);
router.post("/", providersController.createProvider);

module.exports = router;

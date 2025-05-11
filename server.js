const express = require("express");
const mongoose = require("./config/db_mongo");
const app = express();
const port = 3000;

// Middlewares
const morgan = require("./middlewares/morgan");

// Logger
app.use(morgan(":method :host :status :param[id] - :response-time ms :body"));

//Rutas
// const productsRoutes = require('./routes/products.routes');
const providersRoutes = require("./routes/providers.routes");
const productsRoutes = require("./routes/providers.routes");

app.use(express.json()); // Habilito recepción de JSON en servidor

//API
// app.use('/api/products',productsRoutes);
app.use("/api/providers", providersRoutes);
app.use("/api/products", productsRoutes);

//Ruta de prueba
app.get("/", (req, res) => {
  res.send(`Servidor funcionando en ${port}`);
});

//Arrancamos el servidor
app.listen(port, () => {
  console.log(`Servidor arrancado en http://localhost:${port}`);
});

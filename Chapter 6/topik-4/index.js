const express = require("express");
const yaml = require("yamljs");
const redoc = require("redoc-express");
const swaggerUi = require("swagger-ui-express");

const app = express();
const swaggerDocument = yaml.load("./openapi.yaml");
const port = 3000;

app.get("/docs/swagger.json", (req, res) => {
  res.status(200).json(swaggerDocument);
});

app.get(
  "/docs",
  redoc({
    title: "API Documentation",
    specUrl: "/docs/swagger.json",
  })
);

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => console.log(`Linstening on port ${port}`));

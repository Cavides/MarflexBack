const express = require("express");

const {
  getAllProductsHandler,
  getProductHandler,
  createProductsHandler,
  deleteProductsHandler,
  updateProductsHandler,
  getProductByCodeHandler,
} = require("./products_controllers");


const router = new express.Router();

router.get("/", getAllProductsHandler);

router.get("/:id", getProductHandler);

router.post("/", createProductsHandler);

router.get("/:id ", updateProductsHandler);

router.delete("/:id", deleteProductsHandler);

router.get("/code/:code", getProductByCodeHandler);

module.exports = router;
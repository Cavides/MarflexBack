const express = require("express");

const {
  getAllProductsHandler,
  getProductHandler,
  createProductsHandler,
  deleteProductsHandler,
  updateProductsHandler,
  getProductByCodeHandler,
} = require("./products_controllers");

const { isAuthenticated } = require("../Auth/auth_services");

const router = new express.Router();

router.get("/", getAllProductsHandler);

router.get("/:id", getProductHandler);

router.post("/", createProductsHandler);

router.patch("/:id ", updateProductsHandler);

router.delete("/", deleteProductsHandler);

router.get("/code/:code", getProductByCodeHandler);

module.exports = router;
const express = require("express");

const {
  getAllProductsHandler,
  getProductHandler,
  createProductsHandler,
  deleteProductsHandler,
  updateProductsHandler,
} = require("./products_controllers");

const { isAuthenticated } = require("../Auth/auth_services");

const router = new express.Router();

router.get("/", getAllProductsHandler);

router.get("/:_id", getProductHandler);

router.post("/", createProductsHandler);

router.patch("/:id ", updateProductsHandler);

router.delete("/", deleteProductsHandler);

module.exports = router;
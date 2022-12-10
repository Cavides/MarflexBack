const express = require("express");

const {
  getAllProductsHandler,
  getProductHandler,
  createProductHandler,
  deleteProductHandler,
  // updateProductHandler,
  getProductByCodeHandler,
} = require("./products_controllers");


const router = new express.Router();

router.get("/", getAllProductsHandler);

router.get("/:id", getProductHandler);

router.post("/", createProductHandler);

// router.put("/:id ", updateProductHandler);

router.delete("/:id", deleteProductHandler);

router.get("/code/:code", getProductByCodeHandler);

module.exports = router;
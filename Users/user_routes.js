const express = require("express");

const {
  getAllUsersHandler,
  getUserHandler,
  createUserHandler,
  deleteUserHandler,
  updateUserHandler,
  getUserByEmailHandler,
} = require("./user_controllers");

const { registerLogin, userUpdateValidation } = require("./user_joiScheme");

const { isAuthenticated } = require("../Auth/auth_services");

const router = new express.Router();

router.get("/", getAllUsersHandler);

router.get("/:id", getUserHandler);

router.post("/", registerLogin, createUserHandler);

router.get('/email/:email', getUserByEmailHandler);

router.patch("/", userUpdateValidation, isAuthenticated, updateUserHandler);

router.delete("/", isAuthenticated, deleteUserHandler);

module.exports = router;

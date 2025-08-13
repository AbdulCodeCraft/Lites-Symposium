const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController.js");

router.post("/register", userController.registerUser);

router.get("/user/:id", userController.getUserById);

router.get("/user", userController.getUser);

router.delete("/user/:id", userController.deleteUserById);

module.exports = router;

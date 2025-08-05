const express = require("express");
const router = express.Router();
const FaqController = require("../controllers/FaqController.js");

router.get('/',FaqController)

module.exports = router;
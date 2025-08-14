const express = require("express");
const router = express.Router();
const FaqController = require("../controllers/FaqController.js");

router.get('/',FaqController.getFaq)
router.post('/create',FaqController.createFaq)

module.exports = router;
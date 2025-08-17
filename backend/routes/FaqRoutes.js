const express = require("express");
const router = express.Router();
const FaqController = require("../controllers/FaqController.js");

router.get('/',FaqController.getFaq)
router.get('/:id',FaqController.getFaqById)
router.delete('/:id',FaqController.deleteFaqById)
router.post('/',FaqController.createFaq)

module.exports = router;
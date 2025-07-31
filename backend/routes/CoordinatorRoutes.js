const express = require('express');
const router = express.Router();
const CoardinatorController = require('../controllers/CoordinatorController.js')


router.get('/',CoardinatorController);
module.exports  = router;
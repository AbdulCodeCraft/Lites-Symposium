const express = require('express');
const router = express.Router();
const CoordinatorController = require('../controllers/CoordinatorController.js')


router.get('/',CoordinatorController.getCoordinators);
router.post('/create',CoordinatorController.createCoordinator)
module.exports  = router;
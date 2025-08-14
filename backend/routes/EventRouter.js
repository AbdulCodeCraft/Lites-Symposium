const express = require('express');
const router = express.Router();
const EventController = require('../controllers/EventController');


router.get('/',EventController.getEvents);
router.get('/:id',EventController.getEventById)
router.post('/create',EventController.createEvent)

module.exports = router;
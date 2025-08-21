const express = require('express');
const router = express.Router();
const EventController = require('../controllers/EventController');


router.get('/',EventController.getEvents);
router.get('/:id',EventController.getEventById)
router.delete('/:id',EventController.deleteEventById)
router.put('/:id',EventController.updateEvent)
router.post('/',EventController.createEvent)

module.exports = router;
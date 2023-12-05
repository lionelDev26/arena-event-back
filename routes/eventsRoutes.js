const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');

router.get('/events', eventsController.getAllEvents);

router.get('/events/:id', eventsController.getEventsById);

router.post('/events', eventsController.addEvent);

router.put('/events/:id', eventsController.updateEvent);

router.delete('/events/:id', eventsController.deleteEvent);

module.exports = router;

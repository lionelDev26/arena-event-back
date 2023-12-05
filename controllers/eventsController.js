const eventsService = require("../services/EventsService");

exports.getAllEvents = (req, res) => {
  const events = eventsService.getAllEvents();
  res.json(events);
};

exports.getEventsById = (req, res) => {
  const eventId = parseInt(req.params.id);
  const event = eventsService.getEventById(eventId);

  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ error: "event non trouvé " });
  }
};

exports.addEvent = (req, res) => {
  const newEventData = req.body;
  const newEvent = eventsService.addEvent(newEventData);

  res.status(201).json(newEvent);
};

exports.updateEvent = (req, res) => {
  const eventId = parseInt(req.params.id);
  const updatedUserData = req.body;

  const updated = eventsService.updateEvent(eventId, updatedUserData);

  if (updated) {
    res.json({ success: true, message: "event mis a jour" });
  } else {
    res.status(404).json({ error: "event non trouvé" });
  }
};

exports.deleteEvent = (req, res) => {
  const eventId = parseInt(req.params.id);
  const deleted = eventsService.deleteEvent(eventId);

  if (deleted) {
    res.json({ success: true, message: "event supprimé" });
  } else {
    res.status(404).json({ error: "event non trouvé" });
  }
};

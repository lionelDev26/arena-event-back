const db = require('../db/database.json');
const Events = require('../models/Events');

class EventsService {

  static getAllEvents() {
    return db.events;
  }

  static getEventById(eventId) {
    const eventData = db.events.find(event => event.id === eventId);
    if (eventData) {
      return eventData;
    } else {
      console.log("event non trouvé");
      return null; 
    }
  }

  static addEvent(newEventData) {
    db.events.push(newEventData);
    console.log("event ajouté");
    return newEventData;
  }

  static updateEvent(eventId, updatedEventData) {

    const eventIndex = db.events.findIndex(event => event.id === eventId);
    if (eventIndex !== -1) {
      db.events[eventIndex] = { ...db.events[eventIndex], ...updatedEventData };
      return true; 
    } else {
      return false;
    }
  }

  static deleteEvent(eventId) {
    const eventIndex = db.events.findIndex(event => event.id === eventId);
    if (eventIndex !== -1) {
      db.events.splice(eventIndex, 1);
      return true; 
    } else {
      return false;
    }
  }


}

module.exports = EventsService;

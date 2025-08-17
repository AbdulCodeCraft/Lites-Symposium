const Event = require("../models/EventModel.js");

const getEvents = async (req, res) => {
  try {
    const allEvents = await Event.find({});

    const technicalEvents = allEvents
      .filter((event) => event.type === "technical")
      .map((event) => ({
        id: event._id,
        image: event.image,
        event_name: event.eventName,
        event_description: event.eventDescription,
        event_full_description: event.fullDescription,
        rules: event.rules,
        type: event.type,
      }));

    const nonTechnicalEvents = allEvents
      .filter((event) => event.type === "nonTechnical")
      .map((event) => ({
        id: event._id,
        image: event.image,
        event_name: event.eventName,
        event_description: event.eventDescription,
        event_full_description: event.fullDescription,
        rules: event.rules,
        type: event.type,
      }));

    res.status(200).json({
      success: true,
      technicalEvents: technicalEvents,
      nonTechnicalEvents: nonTechnicalEvents,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      res.status(404).json({ success: false, error: "Event not Found" });
    }
    return res.status(200).json({ success: true, event });
  } catch (error) {
    console.log("Error fetching event by id " + error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

const createEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);

    res.status(201).json({
      success: true,
      data: newEvent,
      message: "Event created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error: Unable to create event.",
      details: error.message,
    });
  }
};

const deleteEventById = async (req, res) => {
  try {
    const EventId = req.params.id;
    const event = await User.findByIdAndDelete(EventId);

    if (!event) {
      return res.status(404).json({ success: false, error: "Event not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event by ID:", error);

    res.status(500).json({ success: false, error: "Server Error" });
  }
};

module.exports = {
  getEvents,
  getEventById,
  createEvent,
  deleteEventById,
};

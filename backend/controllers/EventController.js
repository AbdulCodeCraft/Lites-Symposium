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
        event: event.eventDiscription,
        event_description: event.eventDiscription,
        event_full_description: event.fullDiscription,
        rules: event.rules,
        type: event.type,
      }));

    const nonTechnicalEvents = allEvents
      .filter((event) => event.type === "nonTechnical")
      .map((event) => ({
        id: event._id,
        image: event.image,
        event_name: event.eventName,
        event_description: event.eventDiscription,
        event_full_description: event.fullDiscription,
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
    return res.status(200).json({success:true,event})
  } catch (error) {
    console.log("Error fetching event by id " + error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
module.exports = {
  getEvents,
  getEventById,
};

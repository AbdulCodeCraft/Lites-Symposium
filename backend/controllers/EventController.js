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
      }));

    const nonTechnicalEvents = allEvents
      .filter((event) => event.type === "nonTechnical")
      .map((event) => ({
        id: event._id,
        image: event.image,
        event_name: event.eventName,
        event: event.eventDiscription,
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
module.exports = getEvents;

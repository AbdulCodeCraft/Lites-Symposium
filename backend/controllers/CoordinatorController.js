const Coordinator = require("../models/Coordinators.js");

const getCoordinators = async (req, res) => {
  try {
    const allCoordinators = await Coordinator.find({});

    const overall = allCoordinators
      .filter((c) => c.type === "overall")
      .map((c) => ({
        contact_number: c.contactNumber,
        Coordinator_name: c.name,
        role: c.role,
      }));

    const technicalEvents = allCoordinators
      .filter((c) => c.type === "technical")
      .map((c) => ({
        event_name: c.eventName,
        Coordinator_name: c.name,
        contact_number: c.contactNumber,
      }));

    const nonTechnicalEvents = allCoordinators
      .filter((c) => c.type === "non-technical")
      .map((c) => ({
        event_name: c.eventName,
        Coordinator_name: c.name,
        contact_number: c.contactNumber,
      }));

    res.status(200).json({
      success: true,
      overall: overall,
      technicalEvents: technicalEvents,
      nonTechnicalEvents: nonTechnicalEvents, 
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

module.exports = getCoordinators;

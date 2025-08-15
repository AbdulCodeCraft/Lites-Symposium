const Coordinator = require("../models/Coordinators.js");

const getCoordinators = async (req, res) => {
  try {
    const allCoordinators = await Coordinator.find({});

    const overall = allCoordinators
      .filter((c) => c.type === "overall")
      .map((c) => ({
        _id: c._id,
        contact_number: c.contactNumber,
        Coordinator_name: c.name,
        role: c.role,
      }));

    const technicalEvents = allCoordinators
      .filter((c) => c.type === "technical")
      .map((c) => ({
        _id: c._id,
        event_name: c.eventName,
        Coordinator_name: c.name,
        contact_number: c.contactNumber,
      }));

    const nonTechnicalEvents = allCoordinators
      .filter((c) => c.type === "non-technical")
      .map((c) => ({
        _id: c._id,
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

const createCoordinator = async (req, res) => {
  try {
    const newCoordinator = await Coordinator.create(req.body);

    res.status(201).json({
      success: true,
      data: newCoordinator,
      message: "coordinator created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error: Unable to create coordinator.",
      details: error.message,
    });
  }
};

const getCoordinatorById = async (req, res) => {
  try {
    const coordinator = await Coordinator.findById(req.params.id);

    if (!coordinator) {
      return res
        .status(404)
        .json({ success: false, error: "Coordinator not Found" });
    }

    return res.status(200).json({ success: true, coordinator });
  } catch (error) {
    console.log("Error fetching coordintor by id " + error.message);
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const coordinatorId = req.params.id;
    const coordinator = await Coordinator.findByIdAndDelete(coordinatorId);

    if (!coordinator) {
      return res
        .status(404)
        .json({ success: false, error: "coordinator not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "coordinator deleted successfully" });
  } catch (error) {
    console.error("Error deleting coordinator by ID:", error);

    res.status(500).json({ success: false, error: "Server Error" });
  }
};

module.exports = {
  getCoordinators,
  createCoordinator,
  getCoordinatorById,
  deleteUserById,
};

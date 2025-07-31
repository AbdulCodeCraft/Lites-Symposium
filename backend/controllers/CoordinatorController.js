const Coordinator = require("../models/Coordinators.js"); // Check spelling consistency: Coordinator vs Coordinator

const getCoordinators = async (req, res) => {
  try {
    const allCoordinators = await Coordinator.find({});

    // --- Data Processing (MUST happen BEFORE sending response) ---
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
        contact_number: c.contactNumber, // Corrected typo here
      }));

    const nonTechnicalEvents = allCoordinators // Corrected variable name for consistency
      .filter((c) => c.type === "non-technical")
      .map((c) => ({
        event_name: c.eventName,
        Coordinator_name: c.name,
        contact_number: c.contactNumber,
      }));
    // --- End of Data Processing ---

    // Send the structured JSON response AFTER all data processing is complete
    res.status(200).json({
      success: true,
      overall: overall,
      technicalEvents: technicalEvents,
      nonTechnicalEvents: nonTechnicalEvents, // Use the corrected variable name
    });

  } catch (error) {
    // It's good practice to use console.error for actual errors
    console.error(error.message); 
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// If you're exporting a single function, this is correct for the export method.
module.exports = getCoordinators;
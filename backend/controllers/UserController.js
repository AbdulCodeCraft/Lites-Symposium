const User = require("../models/UserModel.js");

const registerUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      mobileNumber,
      college,
      department,
      yearOfStudy,
      technicalEvents,
      nonTechnicalEvents,
      howDidYouKnow,
      foodPreferences,
      gender,
    } = req.body;

    const user = await User.create({
      fullName,
      email,
      mobileNumber,
      college,
      department,
      yearOfStudy,
      technicalEvents,
      nonTechnicalEvents,
      howDidYouKnow,
      foodPreferences,
      gender,
    });

    if (user) {
      res.status(201).json({
        success: true,
        message: "User Registered Successfully",
        data: {
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
        },
      });
    } else {
      res.status(400).json({ success: false, error: "Invalid user data" });
    }
  } catch (error) {
    if(error.name = "ValidationError"){
      const error = Object.values(error.errors).map(err => err.message);
    }
    console.error("Registration error:", error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

module.exports = {registerUser};    

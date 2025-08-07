const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
       match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    mobileNumber: {
      type: String,
      required: true,
      trim: true,
      match: [/^\d{10}$/, "Please enter a 10-digit mobile number"],
    },
    college: {
      type: String,
      required: true,
      trim: true,
    },

    department: {
      type: String,
      required: true,
      trim: true,
    },
    yearOfStudy: {
      type: String,
      required: true,
      enum: {
        values: ["4th Year", "3rd Year", "2nd Year", "1st Year"],
        message: "Year of study must be one of the specified options.",
      },
    },
    technicalEvents: {
      type: [String],
      required: false,
    },
    nonTechnicalEvents: {
      type: [String],
      required: false,
    },
    howDidYouKnow: {
      type: String,
      required: true,
      enum: {
        values: ["Friends", "College", "Instagram", "LinkedIn"],
        message: "Source must be one of the specified options.",
      },
    },
    foodPreferences: {
      type: String,
      required: true,
      enum: {
        values: ["Vegetarian", "Non-Vegetarian"],
        message: "Food preference must be either Vegetarian or Non-Vegetarian.",
      },
    },
    gender: {
      type: String,
      required: true,
      enum: {
        values: ["Male", "Female"],
        message: "Gender must be either Male or Female.",
      },
    },
  },
  {
    registeredAt: {
      type: Date,
      default: Date.now,
    },
  }
);

module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");

const CoordinatorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Coordinator name is required"],
      trim: true,
      minlength: [3, "Coordinator name must be atleast 3 characters long"],
    },
    contactNumber: {
      type: Number,
      required: [true, "Contact number is required"],
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v.toString());
        },
        message: (props) =>
          `${props.value} is not a valid 10 digit contact number`,
      },
    },
    type: {
      type: String,
      required: [true, "Coordinator type is required"],
      enum: {
        values: ["overall", "technical", "non-technical"],
        message: "Coordinator type must be overall, technical,or non-technical",
      },
    },
    role: {
      type: String,
      required: function () {
        return this.type == "overall";
      },
      trim: true,
    },
    eventname: {
      type: String,
      required: function () {
        return this.type === "technical" || this.type === "non-technical";
      },
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Coordinator',CoordinatorSchema);
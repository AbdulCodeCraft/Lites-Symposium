const Faq = require("../models/FaqModel.js");

const getFaq = async (req, res) => {
  try {
    const allFaq = await Faq.find({});

    const registration = allFaq
      .filter((c) => c.type === "registration")
      .map((c) => ({
        question: c.question,
        answer: c.answer,
        type: c.type,
      }));

    const events = allFaq
      .filter((c) => c.type === "events")
      .map((c) => ({
        question: c.question,
        answer: c.answer,
        type: c.type,
      }));

    const food_and_breverages = allFaq
      .filter((c) => c.type === "food_and_breverages")
      .map((c) => ({
        question: c.question,
        answer: c.answer,
        type: c.type,
      }));

    res.status(200).json({
      success: true,
      registration: registration,
      events: events,
      food_and_breverages: food_and_breverages,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

module.exports = getFaq;
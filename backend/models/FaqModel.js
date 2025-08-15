const mongoose = require("mongoose");

const FaqSchema = new mongoose.Schema({
    question: {
        type:String,
        required:true,
        trim:true
    },
    answer: {
        type:String,
        required:true,
        trim:true
    },
    type:{
      type:String,
      required:true,
      enum:{
        values:["registration","events","food_and_breverages"]
      }
    }
    
});


module.exports = mongoose.model('Faq',FaqSchema);
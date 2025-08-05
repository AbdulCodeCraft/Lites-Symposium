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
        values:["Registration","Events","Food_and_Breverages"]
      }
    }
    
}, { timestamps: true });


module.exports = mongoose.model('Faq',FaqSchema);
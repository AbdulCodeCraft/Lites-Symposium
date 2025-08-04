const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    eventName: {
        type:String,
        required:true,
        trim:true
    },
    image:{
        type:String,
        required:true
    },
    eventDiscription: {
        type:String,
        required:true,
        trim:true
    },
    type:{
        type:String,
        required:true,
        enum:{
            values:["technical","nonTechnical"],
            message:"Coordinator type must be technical or non-technical"
        }
    }
    ,
    fullDiscription: {
        type:String,
        required:true,
        trim:true
    },
    rules: {
        type:[String],
        required:true,
        
    },
    maxTeamMembers:{
        type:Number,
        min:1
    }
},{timestamps:true})

module.exports = mongoose.model('Event',EventSchema)
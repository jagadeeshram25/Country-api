const mongoose = require("mongoose")

const countrySchema = new mongoose.Schema({
    countryName:{
        type:String,
        required:true
    },
    capital:{
        type:String,
        required:true
    },
    population:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        required:true
    },
    flag:{
        type:String
    }
})

module.exports = mongoose.model("Country",countrySchema)
const mongoose = require('mongoose');
const Patient =mongoose.model("Patient",new mongoose.Schema({
    firstname:String,
    lastname:String,
    address:String,
    age:Number,
    sortofillness:String

},{timestamps: true}))
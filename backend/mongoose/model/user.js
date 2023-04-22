const mongoose = require('mongoose');
const Patient =mongoose.model("Patient",new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    role:Number,
    password:String,
},{timestamps: true}))
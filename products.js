const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: String,
    rollNo: Number,
    city: String,
    email: String,
    mobileNo: Number
})
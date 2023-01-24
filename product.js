const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: String,
    city: String,
    email: String,
    rollNo: Number,
    mobileNo: Number
});
module.exports = mongoose.model("products", productSchema);
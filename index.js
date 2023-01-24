const express = require("express");
require("./config");
const Product = require("./product");

const app = express();
app.use(express.json());

app.post("/create", async (req, res) => {
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result);
    console.log(req.body);
    res.send("Data has been save in DB");
});


// get data from database
app.get("/list", async (req, res) => {
    let data = await Product.find();
    console.log(data);
    res.send("Data Has Been Displayed");
})
app.listen(4500); 
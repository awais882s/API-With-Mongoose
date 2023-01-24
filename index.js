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
});


app.delete("/delete/:id", async (req, res) => {
    let data = await Product.deleteOne(req.params)
    console.log(data)
    console.log(req.params);
    res.send("Data Has Been Deleted")
});

app.put("/update/:_id", async (req, res) => {
    let data = await Product.updateOne(
        req.params,
        { $set: req.body }
    );
    console.log(data);
    res.send("data has been update ");
})
app.listen(4500); 
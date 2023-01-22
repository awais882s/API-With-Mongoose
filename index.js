const express = require("express");
require("./config");
const Products = require("./product");


const app = express();

app.post("/create", (req, res) => {

    res.send("Data has been save in DB");
});
app.listen(4500);
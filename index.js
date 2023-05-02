const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const chefs = require("./asset/chefs.json");

app.get("/", (req, res) => {
    res.send("CookUp is running...");
});

app.get("/chefs", (req, res) => {
    res.send(chefs);
});

app.listen(port, () => {
    console.log(`CookUp API is running on port: ${port}`);
});

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const chefs = require("./asset/chefs.json");
const recipes = require("./asset/recipes.json");

app.get("/", (req, res) => {
    res.send("CookUp is running...");
});

app.get("/chefs", (req, res) => {
    res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
    const chef = chefs.find(chef => chef.id === +req.params.id);
    res.send(chef);
});

app.get("/chef-recipes/:id", (req, res) => {
    const recipesData = recipes.filter(recipe => recipe["chef_id"] === +req.params.id);
    res.send(recipesData);
});

app.listen(port, () => {
    console.log(`CookUp API is running on port: ${port}`);
});

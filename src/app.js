const { log } = require('console');
const express = require('express');
const app = express();
const path = require("path")

app.listen(3000, ()=>log("Online"))

app.use(express.static(path.resolve(__dirname, "../public")));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.use("/", (req, res) => {
    res.render("home")
})
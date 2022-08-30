// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// CONTROLLER
const reviewController = require("./controllers/reviewController")

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/reviews", reviewController);

app.get("/", (req, res) => {
    res.send("Hello")
})

// EXPORT
module.exports = app;
const express = require("express");
const reviews = express.Router();

const reviewsData = require("../reviews");

reviews.get("/", (req, res) => {
    res.json(reviewsData)
});

// SHOW ROUTE
reviews.get("/:arrayIndex" , (req, res) => {
    const { arrayIndex } = req.params;
    if(reviewsData[arrayIndex]){
        res.json(reviewsData[arrayIndex])
    } else {
        // because the API has no data, the network status is '304' but the below code fixes it and returns a '404' message. We don't want a '304' error.
        res.status(404).send('no bookmark found - sorry')
    }
})

// CREATE Route
reviews.post("/", (req, res) => {
    reviewsData.push(req.body);
    res.json(reviewsData[reviewsData.length - 1])
})

// DELETE Route
// reviews.delete("/:arrayIndex" , (req, res) => {
//     const { arrayIndex } = req.params;
//     if(reviewsData[arrayIndex]){
//         const deletedBookmark = reviewsData.splice(arrayIndex, 1)
//         res.status(200).json(deletedBookmark)
//     } else {
//         // because the API has no data, the network status is '304' but the below code fixes it and returns a '404' message. We don't want a '304' error.
//         res.status(404).send('no bookmark found - sorry')
//     }
// });

// UPDATE Route
// reviews.put("/:arrayIndex" , (req, res) => {
//     const { arrayIndex } = req.params;
//     reviewsData[arrayIndex] = req.body;
//     res.status(200).json(reviewsData[arrayIndex])
// })




module.exports = reviews;
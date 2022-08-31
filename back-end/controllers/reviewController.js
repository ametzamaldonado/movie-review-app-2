const express = require("express");
const reviews = express.Router();

const { 
    getAllReviews, 
    getReview, 
    createReview, 
    deleteReview, 
    updateReview
} = require("../queries/reviews")

reviews.get("/", async (req, res) => {
    const allReviews = await getAllReviews();
    if(allReviews[0]){
        res.status(200).json(allReviews);
    } else {
        res.status(500).json({ error: "server error!" })
    }
});

reviews.get("/:id" , async (req, res) => {
    const { id } = req.params;
    const review = await getReview(id)
    if(review.id){
        res.status(200).json(review)
    } else {
        res.status(404).send({ error: "song not found" })
    }
})

reviews.post("/", async (req, res) => {
    try {
        const review = await createReview(req.body);
        res.json(review)
    } catch (err) {
        return err;
    }
})

reviews.delete("/:id" , async (req, res) => {
    const { id } = req.params;
    const deletedBookmark = await deleteReview(id);
    if(deletedBookmark.id){
        res.status(200).json(deletedBookmark)
    } else {
        // because the API has no data, the network status is '304' but the below code fixes it and returns a '404' message. We don't want a '304' error.
        res.status(404).send({ error: "song not deleted" });
    }
});

reviews.put("/:id" , async (req, res) => {
    const { id } = req.params;
    const updatedReview = await updatedReview(req.body, id);
    if(updateReview.id){
        res.status(200).json(updatedReview)
    } else {
        res.status(404).json({ error: "song not updated" });
    } 
})

module.exports = reviews;
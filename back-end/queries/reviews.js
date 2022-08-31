const db = require("../db/dbConfig");

const getAllReviews = async () => {
    try {
        const allReviews = await db.any("SELECT * FROM reviews");
        return allReviews;
    } catch(err){
        return err;
    }
}

const getReview = async (id) => {
    try {
        const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id);
        return oneReview;
    } catch (error){
        return error;
    }
}

const createReview = async (review) => {
    const { author, movie_id, author_details_name, author_details_username, author_details_avatar_path, author_deails_rating, content, created_at } = review; 
    try {
        const newReview = await db.one(
            "INSERT INTO songs ( author, movie_id, author_details_name, author_details_username, author_details_avatar_path, author_deails_rating, content, created_at ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", 
            [ author, movie_id, author_details_name, author_details_username, author_details_avatar_path, author_deails_rating, content, created_at ]
        );
        return newReview;
    } catch (error){
        return error;
    }
}


const deleteReview = async(id) => {
    try {
        const deleteReview = await db.one("DELETE FROM review WHERE id=$1 RETURNING *", id);
        return deleteReview;
    } catch(err) {
        return err;
    }
}

const updateReview = async (review, id) => {
    const { author, movie_id, author_details_name, author_details_username, author_details_avatar_path, author_deails_rating, content, created_at } = review; 
    try {
        const updatedReview = await db.one("UPDATE reviews SET author=$1, movie_id=$2, author_details_name=$3, author_details_username=$4, author_details_avatar_path=$5 author_deails_rating=$6 content=$7 created_at=$8 WHERE id=$9 RETURNING *", 
        [author, movie_id, author_details_name, author_details_username, author_details_avatar_path, author_deails_rating, content, created_at, id])
        return updatedReview;
    } catch(err) {
        return err;
    }
}

module.exports = { getAllReviews, getReview, createReview, deleteReview, updateReview }


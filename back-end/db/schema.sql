DROP DATABASE IF EXISTS reviews_dev;
CREATE DATABASE reviews_dev;

\c reviews_dev;

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    movie_id INTEGER,
    author TEXT,
    author_details_name TEXT,
    author_details_username TEXT,
    author_details_avatar_path TEXT,
    author_deails_rating INTEGER,
    content TEXT,
    created_at DATE
);




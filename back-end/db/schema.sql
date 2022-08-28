DROP DATABASE IF EXISTS reviews_dev;
CREATE DATABASE reviews_dev;

\c reviews_dev;

CREATE TABLE authorDetails (
    id SERIAL PRIMARY KEY,
    name TEXT,
    username TEXT NOT NULL,
    avatar_path TEXT,
    rating INTEGER
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    author TEXT,
    content TEXT,
    created_at DATE,
    authorDetails_id INTEGER REFERENCES authorDetails (id) 
    ON DELETE CASCADE
);




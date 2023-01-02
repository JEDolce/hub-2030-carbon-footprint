CREATE DATABASE hublogindb;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR (50) NOT NULL,
    created_on TIMESTAMP NOT NULL
);
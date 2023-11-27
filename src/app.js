require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.APP_PORT;

const movieControllers = require("./controllers/movieControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);


const userControllers = require("./controllers/userControllers"); 

app.get("/api/users", userControllers.getUsers); 
app.get("/api/users/:id", userControllers.getUserById); 

module.exports = app;

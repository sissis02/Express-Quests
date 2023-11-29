require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json()); 

const port = process.env.APP_PORT;

const movieControllers = require("./controllers/movieControllers");

const validateMovie = require("./middlewars/validateMovie"); 

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

app.post("/api/movies", validateMovie, movieControllers.postMovie); 

app.put("/api/movies/:id", validateMovie, movieControllers.updateMovie);

app.delete("/api/movies/:id", movieControllers.deleteMovie); 

const userControllers = require("./controllers/userControllers"); 

const validateUser = require("./middlewars/validateUser"); 

app.get("/api/users", userControllers.getUsers); 
app.get("/api/users/:id", userControllers.getUserById); 

app.post("/api/users", validateUser, userControllers.postUser); 

app.put("/api/users/:id", validateUser, userControllers.updateUser);

app.delete("/api/users/:id", userControllers.deleteUser); 

module.exports = app;

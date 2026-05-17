const express = require("express");
const router = express.Router();

const movieController = require("../controllers/movieController");

// Search Movies
router.get("/search", movieController.searchMovie);

// Movie Details
router.get("/movies/:id", movieController.getMovieDetails);

module.exports = router;
const apiClient = require("../api/apiClient");


// SEARCH MOVIES
const searchMovie = async (req, res) => {

    try {

        const title = req.query.title;

        // Validation
        if (!title) {
            return res.status(400).json({
                error: "Title query parameter is required"
            });
        }

        // API Request
        const response = await apiClient.get("/", {
            params: {
                s: title,
                apikey: process.env.OMDB_API_KEY
            }
        });

        res.json(response.data);

    } catch (error) {

        res.status(500).json({
            error: "Failed to fetch movies"
        });
    }
};


// GET MOVIE DETAILS
const getMovieDetails = async (req, res) => {

    try {

        const movieId = req.params.id;

        const response = await apiClient.get("/", {
            params: {
                i: movieId,
                apikey: process.env.OMDB_API_KEY
            }
        });

        res.json(response.data);

    } catch (error) {

        res.status(500).json({
            error: "Failed to fetch movie details"
        });
    }
};


module.exports = {
    searchMovie,
    getMovieDetails
};
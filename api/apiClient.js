const axios = require("axios");

const apiClient = axios.create({
    baseURL: "http://www.omdbapi.com/",
    headers: {
        Accept: "application/json"
    }
});

module.exports = apiClient;
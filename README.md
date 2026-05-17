Endpoints Map & Testing

1. Application Smoke Test
Endpoint: GET http://localhost:3031/test

Purpose: Validates server health and confirms environment configurations are initializing correctly.

Expected Output:

Plaintext
Starting Application...
2. Search Movies by Title
Endpoint: GET http://localhost:3031/api/search?title=<movie_name>

Parameters: title (Query String) — Required

Example Route: http://localhost:3031/api/search?title=Inception

Response Payload Structure (200 OK):

JSON
{
  "Search": [
    {
      "Title": "Inception",
      "Year": "2010",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Poster": "[https://images-na.ssl-images-amazon.com/images/M/](https://images-na.ssl-images-amazon.com/images/M/)..."
    }
  ],
  "totalResults": "1",
  "Response": "True"
}
3. Get Detailed Movie Information
Endpoint: GET http://localhost:3031/api/movies/:id

Parameters: id (URL Path Parameter representing an explicit IMDb ID string)

Example Route: http://localhost:3031/api/movies/tt1375666

Response Payload Structure (200 OK): Provides critical UI fields like ratings, plot structure, director, and actors metadata.

Code Breakdown & Technical Analysis

Architectural Layer Separation

config/apiClient.js (HTTP Base Layout): Custom abstract configuration wrapping Axios. Establishes global base constraints (baseURL) and standardized headers (application/json) ensuring isolated configuration management.

controllers/movieController.js (Business Logic Engine): Uses JavaScript's async/await paradigm with robust try/catch safety blocks. Ensures custom input field validation (checking if the title parameter is undefined or missing) and throws explicit standard HTTP 400 Bad Request or 500 Internal Server Error payloads during processing failures.

routes/movieRoutes.js (Routing Matrix): Maps structural incoming paths cleanly to specific single-responsibility controllers, maintaining modular code distribution.

server.js (App Lifecycle Master): Configures environmental parameters via require('dotenv').config(), mounts sub-routers contextually under /api path segments, and exposes the execution engine context to the running machine lifecycle port.
"""

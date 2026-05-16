const express = require("express");
const router = express.Router();

const movieContoller = require("../controllers/movieController")

router.get("/search", movieContoller.searchbyMovie );

router.get("/movies/:id" , movieContoller.getbyid)


module.exports = router;
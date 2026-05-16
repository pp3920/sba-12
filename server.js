const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

//importing movie

const movieRoute = require("./routes/movieRoutes")

app.use("/api", movieRoute )      // MIDDLEWARE

app.get ("/test", (req,res) => {
    res.send("Starting Application...")

})






app.listen(PORT, () => {
    console.log(`Running on PORT: ${PORT}`)
})

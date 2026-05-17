const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

//Middleware

const movieRoute = require("./routes/movieRoutes")

//Routes

app.use("/api", movieRoute )    


//Home Routes
app.get ("/test", (req,res) => {
    res.send("Starting Application...")

})

//Server
app.listen(PORT, () => {
    console.log(`Running on PORT: ${PORT}`)
})

require("dotenv").config();
const express = require("express");
const db = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");
const port = process.env.PORT;
const movies = require("./routes/movies");
const tvShow = require("./routes/tvshows");

const app = express();
app.use(express.json());
// For parsing application/json:
app.use(require('body-parser').json());

// For parsing application/x-www-form-urlencoded
app.use(require('body-parser').urlencoded({ extended: true })); 
app.use(express.urlencoded({ extended: true }));

db();
app.get("/", (req, res) => res.send("Code Work 😃"));

app.use("/movies", movies);
app.use("/tv-show", tvShow);

//common error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening ${port}`);
});

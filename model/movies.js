const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    director: {
      name: String,
    },
    description: {
      type: String,
    },
    release:{
        type: String,
    }
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movies", movieSchema);

module.exports = Movie;

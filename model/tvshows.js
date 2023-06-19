const mongoose = require("mongoose");

const tvshowSchema = mongoose.Schema(
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

const TvshowSchema = mongoose.model("TvShow", tvshowSchema);

module.exports = TvshowSchema;

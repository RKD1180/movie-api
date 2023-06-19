const Movie = require("../model/movies");

module.exports = {
  add: async (req, res) => {
    try {
      const body = req.body;
      const data = await Movie.create(body);
      res.status(200).json({
        message: "Movie added successfully",
        result: data,
      });
    } catch (err) {
        res.status(404).json({ message: error.message });
    }
  },
  all: async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
  },
  getById: async (req,res) =>{
    try {
      const id = req.params.id;
      console.log(id);
      const movies = await Movie.find({_id:id}).exec();
      res.status(200).json(movies);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
};

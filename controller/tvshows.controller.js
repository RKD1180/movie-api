const TvshowSchema = require("../model/tvshows");

module.exports = {
  add: async (req, res) => {
    try {
      const body = req.body;
      const data = await TvshowSchema.create(body);
      res.status(200).json({
        message: "Tv Show added successfully",
        result: data,
      });
    } catch (err) {
        res.status(404).json({ message: error.message });
    }
  },
  all: async (req, res) => {
    try {
        const tvshow = await TvshowSchema.find();
        res.status(200).json(tvshow);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
  },
};

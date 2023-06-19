const express = require("express");
const moviesController = require("../controller/movies.controller");
const router = express.Router();

router.get("/", moviesController.all);
router.post("/", moviesController.add);
router.get("/:id", moviesController.getById);

module.exports = router;
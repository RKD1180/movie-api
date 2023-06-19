const express = require("express");
const tvshowsController = require("../controller/tvshows.controller");
const router = express.Router();

router.get("/", tvshowsController.all);
router.post("/", tvshowsController.add);

module.exports = router;
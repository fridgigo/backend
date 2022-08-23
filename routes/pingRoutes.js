const express = require("express");
const router = express.Router();
const pingControllers = require("../controllers/ping/pingControllers");

/* GET home page. */
router.get("/ping", pingControllers.controllers.getPing);

module.exports = router;
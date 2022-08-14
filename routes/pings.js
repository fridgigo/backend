const express = require("express");
const router = express.Router();
const pignHandler = require("../handlers/pings");

/* GET home page. */
router.get("/ping", (req, res, next) => pignHandler(req, res, next));

module.exports = router;

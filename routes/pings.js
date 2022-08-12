const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/ping", (req,res,next) => {
    res.json({ status: req.statusCode, message: "pong"})
});

module.exports = router;

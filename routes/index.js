const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => res.json({status: res.statusCode, message: "welcome to fridgiGO"}));

module.exports = router;

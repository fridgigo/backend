const express = require("express");
const router = express.Router();
const userHandler = require('../handlers/users');

/* POST authenticate/signin */
router.post("/authenticate", (req, res, next) => userHandler.authenticate(req, res, next));

module.exports = router;
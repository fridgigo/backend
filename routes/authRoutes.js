const express = require("express");
const router = express.Router();
const authControllers = require('../controllers/auth/authControllers');

/* POST authenticate/signin */
router.post("/authenticate", authControllers.controllers.postLogin);

module.exports = router;
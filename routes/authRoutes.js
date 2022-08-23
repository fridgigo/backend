const express = require("express");
const router = express.Router();
const authControllers = require('../controllers/auth/authControllers');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

// Login Schema
const loginSchema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().min(6).max(12),
});

// Register Schema
const registerSchema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().min(6).max(12),
    fullname: Joi.string().min(3),
})

/* 
    POST authenticate => signin
    POST register => signup
*/
router.post("/authenticate", validator.body(loginSchema), authControllers.controllers.postLogin);
router.post("/register", validator.body(registerSchema), authControllers.controllers.postRegister);

module.exports = router;
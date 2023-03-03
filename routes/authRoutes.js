const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth/authControllers");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");

// Login Schema
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
});

// Register Schema
const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
  repeat_password: Joi.string().min(6).max(12).required(),
  fullname: Joi.string().min(3).required(),
});

// Confirm password Schema
const confirmSchema = Joi.object({
  email: Joi.string().email().required(),
  confirmationNumber: Joi.number().integer().positive().min(100000).max(999999).required(),
});

/* 
    POST authenticate => signin
    POST register => signup
    POST confirm => confirm account
*/
router.post(
  "/authenticate",
  validator.body(loginSchema),
  authControllers.controllers.postLogin
);
router.post(
  "/register",
  validator.body(registerSchema),
  authControllers.controllers.postRegister
);
router.put(
  "/confirm-register",
  validator.body(confirmSchema),
  authControllers.controllers.postConfirm
)

module.exports = router;

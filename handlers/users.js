const User = require("../models/User");
const validation = require("validator");

/* signup function */
const signup = (req, res, next) => {};

/* authenticate/signin function */
const authenticate = (req, res, next) => {
  const { email, password } = req.body;
  if (!validation.isEmail(email) || !email) {
    res.json({
      status: false,
      statusCode: res.statusCode,
      message: "Please enter a valid email.",
    });
  } else if (!validation.isAlphanumeric(password) && !password) {
    res.json({
      status: false,
      statusCode: res.statusCode,
      message: "Please enter a valid password.",
    });
  }

  // check if the user exists in db
  const promise = User.findOne({ email });
  promise
    .then((data) => {
      res.json({ status: true, statusCode: res.statusCode, data });
    })
    .catch((err) => {
      res.json({ status: false, statusCode: res.statusCode, err });
    });
};

/* forgot password function */
const forgotPassword = (req, res, next) => {};

module.exports = { authenticate, signup, forgotPassword };

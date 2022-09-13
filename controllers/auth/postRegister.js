const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const postRegister = async (req, res, next) => {
  try {
    const { email, password, repeat_password, fullname } = req.body;

    // check if user exists
    const userExists = await User.exists({ email });
    if (userExists) {
      return res.status(409).json({ statusMessage: "Email alrady in use." });
    }
    if (password != repeat_password) {
      return res.status(409).json({ statusMessage: "Password doesn't match." });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    // create a user object
    const user = User.create({
      fullname,
      email,
      password: encryptedPassword,
      repeat_password: encryptedPassword,
    });

    // generate JWT
    const token = jwt.sign(
      {
        userId: (await user)._id,
        email: (await user).email,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "604800",
      }
    );

    res.status(201).json({
      userDetails: {
        fullname: (await user).fullname,
        email: (await user).email,
        token,
      },
    });
  } catch (e) {
    return res
      .status(500)
      .json({ statusMessage: "Error occured. Please try again." });
  }
};

module.exports = postRegister;

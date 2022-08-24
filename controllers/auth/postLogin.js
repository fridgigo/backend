const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      // send a token
      // create JWT
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

      return res.status(200).json({
        userDetails: {
          fullname: user.fullname,
          email: user.email,
          token,
        },
      });
    }

    return res.status(400).send("Invalid credentials. Please try again.");
  } catch (e) {
    return res.status(500).send("Something went wrong. Please try again.");
  }
};

module.exports = postLogin;

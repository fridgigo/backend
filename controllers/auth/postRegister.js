const User = require("../../models/User");
const bcrypt = require("bcryptjs");

const postRegister = async (req, res, next) => {
  try {
    const { email, password, repeat_password, fullname } = req.body;

    // check if user exists
    const userExists = await User.exists({ email });
    if (userExists) {
      return res.status(409).send("Email alrady in use.");
    }
    if (password != repeat_password) {
      return res.status(409).send("Password doesn't match.");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    // create a user object
    const user = User.create({
      fullname,
      email,
      password: encryptedPassword,
      repeat_password: encryptedPassword,
    });

    // create JWT
    const token = "JW TOKEN";

    res.status(201).json({
      userDetails: {
        fullname: user.fullname,
        email: user.email,
        token,
        password: user.password
      }
    });
  } catch (e) {
    return res.status(500).send('Error occured. Please try again.')
  }
};

module.exports = postRegister;

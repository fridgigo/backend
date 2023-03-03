const User = require("../../models/User");
const jwt = require("jsonwebtoken");

const postConfirm = async (req, res, next) => {
  const { email, confirmationNumber } = req.body;

  // check if user not exists
  const usr = await User.findOne({ email });
  if (!usr || usr.confirmed) {
    return res.status(409).json({ statusMessage: "User not found or user already confirmed." });
  }

  // check if confirmation number not correct
  if (usr.confirmationNumber != confirmationNumber) {
    return res
      .status(400)
      .json({ statusMessage: "Invalid credentials. Please try again." });
  }

  // update field in DB
  const updatedUsr = await User.findOneAndUpdate(
    { email: email },
    { $set: { confirmed: true, updatedAt: Date.now() } },
    { new: true }
  );

  // check if user confirmed
  if (updatedUsr) {
    return res
      .status(201)
      .json({ statusMessage: "User account confirmed successfully." });
  }

  // return back error
  return res
    .status(401)
    .json({ statusMessage: "Error occured. Please try again." });
};

module.exports = postConfirm;

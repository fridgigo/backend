const User = require("../../models/User");
const validation = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const postLogin = async(req, res, next) => {
    const { email, password } = req.body;
    if (email && password) {
        // checking for email and password validity
        if (!validation.isEmail(email) || !email) {
            res.json({
                status: false,
                statusCode: res.statusCode,
                message: "Please enter a valid email.",
            });
            return;
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
                bcrypt.compare(password, data.password, (err, result) => {
                    if (err) throw err;
                    if (result) {
                        // generate a json web token
                        const payload = { email };
                        const token = jwt.sign(payload, req.app.get("api_secret_key"), {
                            expiresIn: 96768, // for a week
                        });

                        res.json({
                            status: true,
                            statusCode: res.statusCode,
                            token: token,
                        });
                    } else {
                        res.json({
                            status: false,
                            statusCode: res.statusCode,
                            message: "Password is wrong",
                        });
                    }
                });
            })
            .catch((err) => {
                res.json({ status: false, statusCode: res.statusCode, err });
            });
    } else {
        res.json({
            statusCode: res.statusCode,
            status: false,
            message: "Please enter a valid email address and password",
        });
    }
};

module.exports = postLogin;
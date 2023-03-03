require('dotenv').config();

const tokenKey = process.env.TOKEN_KEY;

module.exports = {
	api_secret_key: `${tokenKey}`
};
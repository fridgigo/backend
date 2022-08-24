const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwt_key = process.env.TOKEN_KEY;

const verifyToken = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['autherization'];
    if (!token) {
        res.status(403).send('A token required for authentication.');
    } 
    try {
        token = token.replace(/^Bearer\s+/, "");
        const decoded = jwt.verify(token, jwt_key);
        req.user = decoded;
    } catch(e) {
        res.status(401).send('Invalid token.');
    }

    return next();
}

module.exports = verifyToken;
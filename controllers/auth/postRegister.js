const postRegister = async(req, res, next) => {
    res.json({ ststus: true, statusCode: res.statusCode, message: "Register API Endpoint" })
}

module.exports = postRegister;
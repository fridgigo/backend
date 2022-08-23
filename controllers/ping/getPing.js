const getPing = async(req, res, next) => {
    res.json({ status: res.statusCode, message: "pong" })
}

module.exports = { getPing };
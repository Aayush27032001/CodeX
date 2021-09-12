const user = require('../models/user')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');

dotenv.config();
const isLoggedIn = async (req, res, next) => {

    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "Authorization denied!" });
    }

    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {

        if (err) return res.status(401).json({ error: "Bad Request!" });

        const foundUser = await user.findById(payload._id);

        if (!foundUser) {
            return res.status(401).json({ error: "Authorization denied!" });
        }
        req.user = foundUser;
        next();

    })

}

module.exports = isLoggedIn;
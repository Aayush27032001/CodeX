const user = require('../models/user')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');

dotenv.config();
const isLoggedIn = (req, res, next) => {

    try {

        console.log('cooookieee', req.cookies)
        // console.log('headers', req.headers)
        // console.log(req.headers)
        let token = req.headers.cookie;
        if (token) token = token.split('=')[1];
        console.log('TOKEN', token);
        if (!token) {
            return res.status(401).json({ error: "Access denied!...No token" });
        }

        jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {

            if (err) return res.status(401).json({ error: "Wrong Token!" });

            const foundUser = await user.findById(payload._id);

            if (!foundUser) {
                return res.status(401).json({ error: "Access denied!" });
            }
            req.user = foundUser;
            next();

        })
    } catch (e) {
        console.log(e)
    }


}

module.exports = isLoggedIn;

const express = require("express")
const router = express.Router();
const user = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const isLoggedIn = require('../middleware/requireLogin')

dotenv.config()

router.post('/signup', async (req, res) => {

    const { username, email, role, password } = req.body;
    if (!username || !email || !password) {
        return res.status(422).json({ error: "Please fill all the fields!" })
    }

    try {
        const foundUser = await user.findOne({ email: email , role : role})
        if (foundUser) {
            return res.status(422).json({ error: "User alredy exists with this email!" })
        }
    } catch (err) {
        console.log("didn't get", err)
    }

    try {
        const salt = await bcrypt.genSalt(10);
        console.log('salt',salt)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new user({
            username,
            email,
            role,
            password: hashedPassword
        })
        const savedUser = await newUser.save();
        res.json({ message: "Registered Successfully!", savedUser })
    } catch (err) {
        res.json({ error: "not saved", err })
    }

})

router.post('/verifyuser', isLoggedIn, (req, res) => {

    const { user } = req;
    res.json({
        user: {
            _id: user._id,
            name: user.username,
            email: user.email,
            role: user.role
        }
    });
})
router.post('/login', async (req, res) => {

    try {
        const { email, role, password } = req.body;

        if (!email || !password) {
            return res.status(422).json({ error: "Please fill all the fields!" })
        }

        const foundUser = await user.findOne({ email: email , role:role })
        if (!foundUser) {
            return res.status(401).json({ error: "You don't have an account, Please register first!" })
        }
        const doMatch = await bcrypt.compare(password, foundUser.password);
        if (!doMatch) {
            return res.status(401).json({ error: "Invalid email or password!" })
        }
        const token = jwt.sign(
            { _id: foundUser._id },
            process.env.JWT_SECRET
        );
        console.log(token);
        
        res.cookie("token", token)
        res.json({
            message: "successfully logged in!",
            user: {
                _id: foundUser._id,
                name: foundUser.username,
                email: foundUser.email,
                role:role
            },
            token
        })
    } catch (e) {
        console.log(e)
    }


})

router.get('/logout', (req, res) => {
    console.log("logout")
    res.cookie('token', "", { maxAge: 1 })
    res.status(200).json({ logout: true })

})
module.exports = router

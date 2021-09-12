
const express = require("express")
const router = express.Router();
const user = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')


dotenv.config()

router.get("/", (req, res) => {

    res.send("Hello World!");
})

router.post('/signup', async (req, res) => {

    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(422).json({ error: "Please fill all the fields!" })
    }

    try {
        const foundUser = await user.findOne({ email: email })
        if (foundUser) {
            return res.status(422).json({ error: "User alredy exists with this email!" })
        }
    } catch (err) {
        console.log("didn't get")
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new user({
            username,
            email,
            password: hashedPassword
        })
        const savedUser = await newUser.save();
        res.json({ message: "Registered Successfully!", savedUser })
    } catch (err) {
        res.json({ error: "not saved", err })
    }

})

router.post('/login', async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: "Please fill all the fields!" })
    }

    const foundUser = await user.findOne({ email: email })
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
    res.cookie("token",token,{
        httpOnly:true,
        maxAge:3600
    })
    res.json({ 
        message: "successfully logged in!",
        user:{
            _id:foundUser._id,
            name:foundUser.username,
            email:foundUser.email
        },
        token
    })
    
})

module.exports = router

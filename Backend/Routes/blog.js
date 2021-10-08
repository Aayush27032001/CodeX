const express = require('express')
const router = express.Router()
const isAuthorized = require('../middleware/requireLogin')

const blog = require("../models/blog")

router.post('/blogs/createBlogs', async (req, res) => {

    const { title, author, thumbnail, content } = req.body;

    if (!title || !thumbnail || !content) {
        console.log('fill all fields')
        return
    }
    const newBlog = new blog({
        title,
        author,
        thumbnail,
        content
    })


    const savedBlog = await newBlog.save()

    if (savedBlog) {
        // console.log(savedBlog)
        return res.json({ message: "Successfully saved" })
    }
    res.json({ error: "Something went wrong!" })


})

router.get('/blogs/allblogs', async (req, res) => {

    try {
        const blogs = await blog.find({})
        .populate('author')
        .populate('comments')
        .exec()

        if (blogs) {
            // console.log(blogs)
            return res.json({ blogs })
        }
        res.json({ error: "Something went wrong!" })
    } catch (e) {
        console.log(e)
    }

})

module.exports = router
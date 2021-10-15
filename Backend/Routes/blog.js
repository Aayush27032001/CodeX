const express = require('express')
const router = express.Router()
const isAuthorized = require('../middleware/requireLogin')

const blog = require("../models/blog")

router.post('/blogs/createBlogs', async (req, res) => {

    const { title, author, thumbnail, description, content } = req.body;

    if (!title || !thumbnail || !content) {
        console.log('fill all fields')
        return
    }
    const newBlog = new blog({
        title,
        description,
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
            .populate({ path: 'comments', options: { sort: { 'createdAt': -1 } } })
            .sort({ createdAt: -1 })
            .exec()

        if (blogs) {
            // console.log(blogs)
            return res.json({ blogs })
        }
        res.json({ error: "Something went wrong!" })
    } catch (e) {
        console.log(e, 'this is error')
    }

})

router.get('/blogs/:id', async (req, res) => {

    try {
        const blogs = await blog.findById(req.params.id)
            .populate('author')
            .populate({ path: 'comments', options: { sort: { 'createdAt': -1 } } })
            .sort({ createdAt: -1 })
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

router.put('/blogs/:id/edit', async (req, res) => {

    try {
        const { title, author, thumbnail, description, content } = req.body;
        console.log(title)
        if (!title || !thumbnail || !content) {
            console.log('fill all fields')
            return
        }
        const newBlog = {
            title,
            description,
            author,
            thumbnail,
            content
        }
        const updatedBlog = await blog.findByIdAndUpdate(req.params.id, { $set: newBlog })
            .populate('author')
            .populate({ path: 'comments', options: { sort: { 'createdAt': -1 } } })
            .sort({ createdAt: -1 })
            .exec()
        // console.log(updatedBlog)
        // const updatedBlog = await blog.updateOne({_id: req.params.id }, newBlog)
        // .populate('author')
        // .populate({ path: 'comments', options: { sort: { 'createdAt': -1 } } })
        // .sort({ createdAt: -1 })
        // .exec()


        if (updatedBlog) {
            // updatedBlog = await updatedBlog.populate('author')
            //     .populate({ path: 'comments', options: { sort: { 'createdAt': -1 } } })
            //     .sort({ createdAt: -1 })
            //     .exec()
            return res.json({ mesaage: 'updated successfully', updatedBlog })
        }
        res.json({ error: "Something went wrong!" })
    } catch (e) {
        console.log(e)
    }

})

router.get('/blogs/find-user-blog/:user_id', async (req, res) => {

    try {
        const blogs = await blog.find({ author: req.params.user_id })
            .populate('author')
            .populate({ path: 'comments', options: { sort: { 'createdAt': -1 } } })
            .sort({ createdAt: -1 })
            .exec()

        if (blog) {
            // console.log(blogs)
            return res.json({ blogs })
        }
        res.json({ error: "Something went wrong!" })
    } catch (e) {
        console.log(e)
    }

})

module.exports = router
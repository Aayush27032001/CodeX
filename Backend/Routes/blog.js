const express = require('express')
const router = express.Router()

const blog = require("../models/blog")

router.post('/blogs/createBlogs', async (req,res)=>{

    const {title,thumbnail,content} = req.body;
    
    if(!title || !thumbnail || !content){
        console.log('fill all fields',title,thumbnail,content)
        return
    }
    const newBlog = new blog({
        title,
        thumbnail,
        content
    })

    
    const savedBlog = await newBlog.save()
    
    if(savedBlog){
        console.log(savedBlog)
        return res.json({message:"Successfully saved"})
    }
    res.json({error:"Something went wrong!"})
    
   
})

router.get('/blogs/allblogs', async (req,res)=>{

    const blogs = await blog.find({})

    if(blogs){
        console.log(blogs)
        return res.json({blogs})
    }
    res.json({error:"Something went wrong!"})
})

module.exports = router
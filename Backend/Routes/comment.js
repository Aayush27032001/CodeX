const express = require('express')
const router = express.Router();
const Comment = require('../models/comment')
const Blog  = require('../models/blog')
router.post('/blogs/:id/comments/createComment',async (req,res)=>{

     console.log('hey')
     try{
          const {author,comment} = req.body;
          console.log('author name',author)
          if(!author){
               res.status(401).json({error:'Please log in First!'})
          }

          if(!comment){
               res.status(422).json({error:'You can not post empty comment!'})
          }

          const foundBlog = await Blog.findById(req.params.id)
          console.log('comments',foundBlog.comments)
          const newComment = new Comment({
               author:{
                    id: author._id,
                    username: author.name
               },
               content:comment
          })

          const savedComment = await newComment.save();
          await foundBlog.comments.push(savedComment._id)
          // console.log('updatedBlog',updatedBlog.comments)
          const savedBlog = await foundBlog.save()
          console.log('savedBlog',savedBlog.comments)
          if(!savedBlog) return res.status(422).json({error:'Failed to save'})
          res.json({message:'Comment Successfully saved!'})
     }catch(e){
          console.log(e)
     }
     
})

module.exports = router
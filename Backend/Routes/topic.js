const express = require('express')
const router = express.Router();
const Topic= require('../models/topic')
const Tutorial = require('../models/tutorial')


router.get('/tutorials/:id/topics/getTopics',async (req,res)=>{

    try{
        const foundTutorial = await Tutorial.findById(req.params.id).populate('topics').exec()
        // await foundTutorial
        if(!foundTutorial){
            return res.status(422).json({error:'Tutorial not found!'})
        }
        res.json({topics:foundTutorial.topics})
    }catch(err){
        console.log(err)
    }
    
})
router.post('/tutorials/:id/topics/postTopic',async (req,res)=>{

    const {title,content} = req.body;
    console.log('t&c',title,content)
    if(!title || !content){
        return res.status(422).json({error:'Please fill all fields'})
    }

    try{
        const foundTutorial = await Tutorial.findById(req.params.id)

        if(!foundTutorial){
            return res.status(422).json({error:'Tutorial not found!'})
        }
        let newTopic= new Topic({
            title,
            content
        })

        const savedTopic= await newTopic.save()

        if(!savedTopic){
            return res.status(422).json({error:'Something went wrong!'})
        }

        await foundTutorial.topics.push(savedTopic._id)
        const updatedTutorial = await foundTutorial.save()
        if(!updatedTutorial){
            return res.status(422).json({error:'Something went wrong!'})
        }

        res.json({message:'saved succesfully!',tutorial:updatedTutorial,topic:savedTopic})
    }catch(err){
        console.log(err)
    }
})

module.exports = router
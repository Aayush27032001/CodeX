const express = require('express')
const router = express.Router();
const Topic= require('../models/topic')
const Tutorial = require('../models/tutorial')
const isAuthorized = require('../middleware/requireLogin')

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

router.put('/tutorials/:id/topics/editTopic/:topic_id',isAuthorized,async (req,res)=>{

    const {title,content} = req.body;
    console.log('t&c',title,content)
    if(!title || !content){
        return res.status(422).json({error:'Please fill all fields'})
    }

    try{

        console.log(typeof req.params.id)
        const foundTutorial = await Tutorial.findById(req.params.id)

        if(!foundTutorial){
            return res.status(422).json({error:'Tutorial not found!'})
        }
        console.log(JSON.stringify( req.user._id) === JSON.stringify(foundTutorial.author))
        if(JSON.stringify(req.user._id) != JSON.stringify(foundTutorial.author)){
            return res.json({ error: "You are not authorized to edit this topic!!" })
        }

        let newTopic= {
            title,
            content
        }

        const updatedTopic = await Topic.findByIdAndUpdate(req.params.topic_id,{ $set: newTopic })
        if(!updatedTopic){
            return res.status(422).json({error:'Something went wrong!'})
        }

        res.json({message:'saved succesfully!',tutorial:foundTutorial,topic:updatedTopic})
    }catch(err){
        console.log(err)
    }
})


router.delete('/tutorials/:id/topics/deleteTopic/:topic_id',isAuthorized,async (req,res)=>{

    try{

        const foundTutorial = await Tutorial.findById(req.params.id)

        if(!foundTutorial){
            return res.status(422).json({error:'Tutorial not found!'})
        }

        if(JSON.stringify(req.user._id) != JSON.stringify(foundTutorial.author)){
            return res.json({ error: "You are not authorized to delete this topic!!" })
        }

        const deletedTopic = await Topic.findByIdAndDelete(req.params.topic_id)
        if(!deletedTopic){
            return res.status(422).json({error:'Something went wrong!'});
        }

        console.log(foundTutorial.topics.length)
        const filteredTopic = foundTutorial.topics.filter((topic,ind)=>{
            return JSON.stringify(topic) != JSON.stringify(req.params.topic_id)
        })
        console.log(foundTutorial.topics.length)
        foundTutorial.topics = filteredTopic;
        console.log(foundTutorial.topics.length)

        res.json({message:'deleted topic!',deletedTopic})
    }catch(err){
        console.log(err)
    }

})
module.exports = router
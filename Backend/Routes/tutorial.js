const express = require('express')
const router = express.Router();
const Tutorial = require('../models/tutorial')

router.post('/tutorials/postTutorial',async (req,res)=>{

    const {title,author,category,topics} = req.body;
    console.log('topics',topics)
    if(!title || !category){
        return res.status(422).json({error:'Please fill all fields'})
    }

    try{
        let newTutorial = new Tutorial({
            title,
            author,
            category,
            topics
        })

        const savedTutorial = await newTutorial.save()

        if(!savedTutorial){
            return res.status(422).json({error:'Something went wrong!'})
        }

        res.json({message:'saved succesfully!',tutorial:savedTutorial})
    }catch(err){
        console.log(err)
    }
})

module.exports = router
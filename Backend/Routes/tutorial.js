const express = require('express')
const router = express.Router();
const Tutorial = require('../models/tutorial')
const isAuthorized = require('../middleware/requireLogin')

router.get('/tutorials/alltutorials',async(req,res)=>{
 
    try{
        const response = await Tutorial.find({}).populate('topics').exec();
        if(!response){
            return res.status(422).json({error:'Something went wrong'})
        }
        res.json({tutorials:response})
    }catch(err){
        console.log(err)
    }
    
})
router.post('/tutorials/postTutorial',isAuthorized,async (req,res)=>{

    if(req.user.role !== 'Teacher'){
        return res.status(422).json({error:'Only teachers are allowed to upload the tutorials!'})
    }
    const {title,author,category,thumbnail,topics} = req.body;
    console.log('topics',topics)
    if(!title || !category){
        return res.status(422).json({error:'Please fill all fields'})
    }

    try{
        let newTutorial = new Tutorial({
            title,
            author,
            category,
            thumbnail,
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
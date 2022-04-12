
const express = require('express')
const mongoose = require('mongoose')
const auth = require("./Routes/auth")
const blog = require('./Routes/blog')
const tutorial = require('./Routes/tutorial')
const topic = require('./Routes/topic')
const comment = require('./Routes/comment')
const dotenv = require("dotenv")
const cors = require("cors")
const cookie = require('cookie-parser')

dotenv.config();

try{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    },()=>console.log("db connected"))
}catch(err){
    console.log(err)
}


const app = express();
app.use(cookie());
app.use(cors({credentials:true,origin:['https://code-x-psi.vercel.app/','http://localhost:3000']}));
app.use(express.json())
app.use(auth)
app.use(blog)
app.use(tutorial)
app.use(topic)
app.use(comment)

app.listen(5000,()=>{
    console.log("Server started...")
})
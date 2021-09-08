
const express = require('express')
const mongoose = require('mongoose')
const auth = require("./Routes/auth")
const dotenv = require("dotenv")
const cors = require("cors")


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
app.use(cors());
app.use(express.json())
app.use(auth)

app.listen(5000,()=>{
    console.log("Server started...")
})
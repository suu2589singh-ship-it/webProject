const express=require("express");
const app=express()
const Routers=require("./UserRouter/UserRoute.js")
const cors =require("cors")
const cookieParser = require("cookie-parser");
const connectdb=require("./UserControler/Model/database.js")

app.use(express.urlencoded({extended:true}))
connectdb();
app.use(cors({credentials:true,origin:true,withCredentials:true}))
app.use(express.json());
app.use(cookieParser())
app.get("/",(req,res)=>{[
    res.send("hellow")
]});

app.use('/api/user',Routers)



app.listen(3000,()=>{
    console.log("running it")
})
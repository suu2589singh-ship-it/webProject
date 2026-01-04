const express=require("express");
const app=express()
const routers=require("./UserRouter/UserRoute.js")
const cors =require("cors")
const cookieParser = require("cookie-parser");
const connectdb=require("./UserControler/Model/database.js")
const dotenv=require("dotenv").config()

app.use(express.urlencoded({extended:true}))
connectdb();
app.use(cors({credentials:true,origin:"https://subtle-treacle-2b94c8.netlify.app",withCredentials:true,methods:["GET","POST","PUT","DELETE","OPTIONS"]}));
app.options("*",cors())
app.use(express.json());
app.use(cookieParser())
app.get("/",(req,res)=>{
    res.send("hellow")
});

app.use('/api/user',routers)



app.listen(process.env.Port,()=>{
    console.log("running it")
})

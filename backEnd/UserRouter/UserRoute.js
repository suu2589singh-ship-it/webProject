const express=require("express")
const userlogin=require("../UserControler/Userdata")
const register=require("../UserControler/Register")
const sendMessage=require("../UserControler/Massage")
const checkauth = require("../UserControler/Auth")
const logout = require("../UserControler/Logout.")
const saveData=require("../UserControler/Alldata")
const Routers=express.Router()

Routers.post("/login",userlogin)
Routers.post("/Register",register)
Routers.post("/massage",sendMessage)
Routers.get("/checkauth",checkauth)
Routers.post("/logout",logout)
Routers.post("/Savedata",saveData)



module.exports=Routers

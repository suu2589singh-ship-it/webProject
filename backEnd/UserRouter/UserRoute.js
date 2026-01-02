const express=require("express")
const userlogin=require("../UserControler/Userdata")
const Register=require("../UserControler/Register")
const sendMessage=require("../UserControler/Massage")
const checkauth = require("../UserControler/Auth")
const logout = require("../UserControler/Logout.")
const SaveData=require("../UserControler/Alldata")
Routers=express.Router()

Routers.post("/login",userlogin)
Routers.post("/Register",Register)
Routers.post("/massage",sendMessage)
Routers.get("/checkauth",checkauth)
Routers.post("/logout",logout)
Routers.post("/Savedata",SaveData)



module.exports=Routers
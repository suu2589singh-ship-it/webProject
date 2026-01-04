const express=require("express")
const userlogin=require("../UserControler/Userdata")
const register=require("../UserControler/Register")
const sendMessage=require("../UserControler/Massage")
const checkauth = require("../UserControler/Auth")
const logout = require("../UserControler/Logout.")
const saveData=require("../UserControler/Alldata")
const routers=express.Router()

routers.post("/login",userlogin)
routers.post("/Register",register)
routers.post("/massage",sendMessage)
routers.get("/checkauth",checkauth)
routers.post("/logout",logout)
routers.post("/Savedata",saveData)



module.exports=routers

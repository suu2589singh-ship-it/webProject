const express=require("express")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
const User=require( "./Model/User");

const userlogin=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await User.findOne({email}).select("+password");
        if(!user){
            return res.status(400).send("somthing went to wrong")
        }
        const passs=await bcrypt.compare(password,user.password)
        if(passs)res.send("your login")
        else res.send("somthing went to wrong")
        let token=jwt.sign({id:user._id},"myScretkey",{expiresIn:"1m"});
            res.cookie("token",token,{
                    httpOnly:true,
                    secure:true,
                    sameSite:"strict",
                    maxAge:60*1000
                    });

            return res.status(200).json({massage:"login succefuly",authenticated:true})

    }catch(err){
        res.status(500).send("server error")
    }
    
}
module.exports=userlogin
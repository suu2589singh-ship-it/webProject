const bcrypt=require('bcrypt')
const  jwt=require("jsonwebtoken")
const User=require('./Model/User');
const Register=async (req,res)=>{
    try{
        const{email,password,username}=req.body
        const user=await User.findOne({email});
        if(user){
            return res.json({massage:"something  email went go wrong"})
            
        }
        if(password.length < 6){
            return res.json({massage:"password is short"})    

        }
        const salts=await bcrypt.genSalt(10)
           const hashs=await bcrypt.hash(password,salts)
                const newUser= await User.create({
                    username:username,
                    email:email,
                    password:hashs
                })
            

            let token=jwt.sign({email},"myScretkey",{expiresIn:"1m"});
            res.cookie("token",token,{
                httpOnly:true,
                secure:true,
                sameSite:"strict",
                maxAge:60*1000

            })
            return res.json({massage:"succfuly",user,newUser})
            
        
    }catch(err){
        console.log(err)
        res.send("somthing went go wrong")
    }
};

module.exports=Register
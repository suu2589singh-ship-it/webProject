const jwt=require("jsonwebtoken")

const checkauth=(req,res)=>{
    const token=req.cookies.token;
        if(!token){
            return res.status(401).json({authenticated:false});
        }
        jwt.verify(token,process.env.JWT,(err,decode)=>{
            if(err){
                return res.json({authenticated:false})
            }
            res.json({authenticated:true,user:decode})
    })
    
}

module.exports=checkauth;
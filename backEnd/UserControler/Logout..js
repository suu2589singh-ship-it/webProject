const logout=(req,res)=>{
    res.clearCookie("token",{httpOnly:true,
        secure:false,
        sameSite:"lax",
        
    })

}
module.exports=logout
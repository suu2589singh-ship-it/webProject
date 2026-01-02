const { json } = require("express")
const masseges =require("./Model/Massage")

const sendMessage=async(req,res)=>{
    try{
        const{email,name,message}=req.body
        if(!email || !name  || !message){
            return(
                res.send("fill all field")

            )         
            
        }
        
            const newMassage=await masseges.create({
                    email:email,
                    name:name,
                    message:message


                })
            res.json({massage:"send  massage",newMassage})

    }catch(error){
        res.json({massage:"somting went to wrong"})
    }


}
module.exports=sendMessage

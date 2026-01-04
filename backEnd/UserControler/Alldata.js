const express=require("express")
const alldata=require("./Model/Alldatabase")



const saveData=async(req,res)=>{
    const{Order,Address,Paymentmethod}=req.body
    const all= await alldata.create({
        Address:Address,
        Order:Order,
        Paymentmethod:Paymentmethod    
    })
   res.json({massage:"your data save",all})

   console.log(req.body)


}


module.exports=saveData

const { default: mongoose } = require("mongoose");
const mongo=require("mongoose");

const  connectdb=async()=>{
    
    try{
        await mongo.connect(process.env.MONGO);
        console.log("MongoDB Connected")
    }catch(error){
        console.log("MongoError",error)
    }


};
module.exports=connectdb
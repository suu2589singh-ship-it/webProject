const { default: mongoose } = require("mongoose");
const mongo=require("mongoose");

const  connectdb=async()=>{
    let uri="mongodb+srv://suu2589singh_db_user:iIZkdph06tq72DYl@cluster0.3ityriy.mongodb.net/?appName=Cluster0"

    try{
        await mongo.connect(uri);
        console.log("MongoDB Connected")
    }catch(error){
        console.log("MongoError",error)
    }


};
module.exports=connectdb
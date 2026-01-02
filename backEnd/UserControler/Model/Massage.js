const mongo=require("mongoose")

const massage=new mongo.Schema({

    email:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true
    }

},{timestamps:true})

module.exports=mongo.model("Massage",massage);
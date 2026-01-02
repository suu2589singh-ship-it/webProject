const mongo=require("mongoose")


const alldata=mongo.Schema({
    Address:{
        FirstName:{
            type:String,
            required:true    
        },
        LastName:{
            type:String,
            required:true
            
        },
        City:{
            type:String,
            required:true
            
        },
        State:{
            type:String,
            required:true
            
        },
        Pincode:{
            type:String,
            required:true
            
        },
        fullAddress:{
            type:String,
            required:true
        }


    },
    Order:[{
        id:{
            type:String,
            required:true
        },
        qty:{
            type:Number,
            required:true
        },
        images:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        brand:{
            type:String,
            required:true
        }
    }],

    Paymentmethod:{
            type:String, 
            enum:["CASH","UPI","CARD"],
            required:true     
    },

    },{timestamps:true});


module.exports=mongo.model("Database",alldata)
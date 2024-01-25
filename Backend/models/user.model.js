const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    saved:
        [
           { 
            type: mongoose.Schema.Types.ObjectId,
            ref:"movie"
           }
     ]
    
})

const UserModel=mongoose.model("user",userSchema)

module.exports=UserModel
const UserModel = require("../models/user.model")
const bcrypt=require("bcrypt")
const {generateToken}=require("../config/token")

const register=async(req,res)=>{
    const {name,email,password}=req.body
    try {
        const user=await UserModel.findOne({email})
        if(!user){
            bcrypt.hash(password, 3, async (err, hash)=> {
              // Store hash in your password DB.
              if(err){
                res.status(400).json({msg:err.message})
              }else{
                const newUser=new UserModel({name,email,password:hash})
                newUser.save()
                const token=generateToken(newUser._id)
                res.status(200).json({msg:"User Registered Successfully",newUser,token})
              }
            });
        }else{
            res.status(200).json({msg:"User Already Exist !"})
        }
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}

const login=async(req,res)=>{
    const {email,password}=req.body
    try {
        const user= await UserModel.findOne({email})
        if(user){
            bcrypt.compare(password, user.password, async (err, result) =>{
              // result == true
              if(result){
                const token =generateToken(user._id)
                res.status(200).json({msg:"Login Successfull",token})
              }else{
                res.status(200).json({msg:"Please Check Your Password"})
              }
            });
        }else{
            res.status(200).json({msg:"Please Register First"})
        }
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

module.exports={register,login}
const UserModel = require("../models/user.model")
const bcrypt=require("bcrypt")
const {generateToken}=require("../config/token")

const register=async(req,res)=>{
    const {name,email,password,role}=req.body
    try {
        const user=await UserModel.findOne({email})
        if(!user){
            bcrypt.hash(password, 3, async (err, hash)=> {
              // Store hash in your password DB.
              if(err){
                res.status(400).json({msg:err.message})
              }else{
                const newUser=new UserModel({name,email,password:hash,role})
                newUser.save()
                const token=generateToken(newUser.role,user._id)
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
                const token =generateToken(user.role,user._id)
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

const watchlist=async(req,res)=>{
  const userId = req.user.userId;
  const  movieId  = req.params.id;

  const user = await UserModel.find({_id:userId});
  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }

  if (!user.saved.includes(movieId)) {
    user.watchlist.push(movieId);
    await user.save();
    res.send({ user: user, msg: "Movie Added to Watchlist " });
  } else {
    res.status(409).json({ msg: "Movie is already in the watchlist" });
  }
}
module.exports={register,login,watchlist}
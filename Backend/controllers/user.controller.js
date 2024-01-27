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
                const token = generateToken(newUser.role, newUser._id);
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
  const userId = req.userId;
  const  movieId  = req.params.id;
  try {
    const user = await UserModel.findOne({ _id: userId });
     if (!user) {
       return res.status(200).json({ msg: "User not found" });
     }
     if (!user.saved.includes(movieId)) {
       user.saved.push(movieId);
       await user.save();
       res.status(200).json({ user: user, msg: "Movie Added to saved " });
     } else {
       res.status(200).json({ msg: "Movie is already saved" });
     }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

const getSaved = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await UserModel.findOne({ _id: userId }).populate('saved')
    res.status(200).json({msg:user.saved})
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const deleteSaved=async(req,res)=>{
  const userId = req.userId;
  const movieId = req.params.id;
  try {
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      return res.status(200).json({ msg: "User not found" });
    }
    if (user.saved.includes(movieId)) {
      user.saved.pull(movieId);
      await user.save();
      const movies = await UserModel.populate(user, { path: "saved" });
      res.status(200).json({ movies:movies.saved, user: user, msg: "Movie removed from saved " });
    } else {
      res.status(200).json({ msg: "Movie is not saved" });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

module.exports={register,login,watchlist,getSaved,deleteSaved}
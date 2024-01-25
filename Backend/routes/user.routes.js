const express=require("express")
const { register,login,watchlist} = require("../controllers/user.controller")

const userRouter=express.Router()

userRouter.post("/register",register)
userRouter.post("/login",login)
//userRouter.post("/logout",logout)
userRouter.put("/watchlist/:id",watchlist)

module.exports=userRouter
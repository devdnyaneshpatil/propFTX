const express=require("express")
const { register,login,watchlist,getSaved,deleteSaved} = require("../controllers/user.controller")
const auth = require("../middlewares/auth.middleware")

const userRouter=express.Router()

userRouter.post("/register",register)
userRouter.post("/login",login)
//userRouter.post("/logout",logout)
userRouter.put("/watchlist/:id",auth,watchlist)
userRouter.get("/watchlist",auth,getSaved)
userRouter.delete("/watchlist/:id",auth,deleteSaved)

module.exports=userRouter
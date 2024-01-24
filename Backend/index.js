const express=require("express")
const connection = require("./config/db")
const cors=require("cors")
const userRouter = require("./routes/user.routes")
require("dotenv").config()

const app=express()

app.use(cors())
app.use(express.json())
app.use("/users",userRouter)

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(process.env.PORT,async(req,res)=>{
    try {
        await connection
        console.log("Connected to the DB")
        console.log(`Server is running at port:-${process.env.PORT}`)
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})
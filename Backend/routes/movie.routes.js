const express=require("express")
const {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movie.controller");
const auth = require("../middlewares/auth.middleware")
const authorize = require("../middlewares/role.middleware")

const movieRouter=express.Router()

//retriving all the movies but only for authenticated users
movieRouter.get("/",auth,getMovies)

//creating or posting a movie only for admin
movieRouter.post("/add", auth,authorize(["admin"]),addMovie);

//updating a movie only for admin
movieRouter.patch("/update/:id", auth,authorize(["admin"]),updateMovie);

//deleting a movie only for admin
movieRouter.delete("/delete/:id", auth,authorize(["admin"]),deleteMovie);


module.exports=movieRouter
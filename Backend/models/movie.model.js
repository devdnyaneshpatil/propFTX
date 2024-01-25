const mongoose=require("mongoose")

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    default: 5
  },
  img:{
    type:String
  }
},{
    timestamps:true
});

const MovieModel=mongoose.model('movie',movieSchema)

module.exports=MovieModel
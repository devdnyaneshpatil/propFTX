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
    type: Date,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    default: 5
  }
},{
    timestamps:true
});

const MovieModel=mongoose.model('movie',movieSchema)

module.exports=MovieModel
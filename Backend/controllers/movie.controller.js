const MovieModel = require("../models/movie.model");

const getMovies = async (req, res) => {
  try {
    const movies = await MovieModel.find();
    res.status(200).json({ msg: movies });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const addMovie = async (req, res) => {
    const payload =req.body
    try {
       const newMovie=new MovieModel(payload)
       await newMovie.save()
       res.status(200).json({msg:"Movie Has Been Added",newMovie})
    } catch (error) {
       res.status(400).json({ msg: error.message }); 
    }
};

const updateMovie = async (req, res) => {
    const payload=req.body
    const movieId=req.params.id
    try {
        const updatedMovie=await MovieModel.findByIdAndUpdate(movieId,payload,{new:true})
        res.status(200).json({msg:"Movie Has Been Updated",updatedMovie})
    } catch (error) {
        res.status(400).json({ msg: error.message }); 
    }
};

const deleteMovie = async (req, res) => {
    const movieId=req.params.id
    try {
        await MovieModel.findByIdAndDelete(movieId)
        res.status(200).json({ msg: "Movie Has Been Deleted"});
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};


const searchMovie=async(req,res)=>{
    const keyword = req.query.search
      ? {
          $or: [
            {
              title: { $regex: req.query.search, $options: "i" },
              genre: { $regex: req.query.search, $options: "i" },
            },
          ],
        }
      : {};
    const moives = await MovieModel.find(keyword)
    res.status(200).json({msg:moives});
}




module.exports = { getMovies, addMovie, updateMovie, deleteMovie,searchMovie };

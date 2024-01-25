const MovieModel = require("../models/movie.model");
const moment = require("moment");

const getMovies = async (req, res) => {
  const { page = 1, search = "", year, sort, order = "asc" } = req.query;

  let query = {
    $or: [
      { title: new RegExp(search, "i") },
      { genre: new RegExp(search, "i") },
    ],
  };

  let sortQuery = {};

  if (year) {
    query.year = year;
  }

  if (sort === "year") {
    sortQuery.releaseDate = order === "desc" ? -1 : 1;
  } else if (sort === "title") {
    sortQuery.title = order === "desc" ? -1 : 1;
  }

  try {
    const movies = await MovieModel.find(query)
      .sort(sortQuery)
      .limit(3 * 1)
      .skip((page - 1) * limit)
      .exec();
    res.status(200).json({msg:movies});
  } catch (e) {
    res
      .status(500)
      .json({
        msg:
          e.message,
      });
  }
};


const addMovie = async (req, res) => {
  const payload = req.body;
  try {
    const newMovie = new MovieModel({
      ...payload,
      releaseDate: moment(payload.releaseDate).format("YYYY-MM-DD"),
    });
    await newMovie.save();
    res.status(200).json({ msg: "Movie Has Been Added", newMovie });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const updateMovie = async (req, res) => {
  const payload = req.body;
  const movieId = req.params.id;
  try {
    const updatedMovie = await MovieModel.findByIdAndUpdate(movieId, payload, {
      new: true,
    });
    res.status(200).json({ msg: "Movie Has Been Updated", updatedMovie });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const deleteMovie = async (req, res) => {
  const movieId = req.params.id;
  try {
    await MovieModel.findByIdAndDelete(movieId);
    res.status(200).json({ msg: "Movie Has Been Deleted" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = { getMovies, addMovie, updateMovie, deleteMovie };

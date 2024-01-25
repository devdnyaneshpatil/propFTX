import React, { useState, useEffect } from "react";
import "./Content.css"; 

function Content() {
  const [movies, setMovies] = useState([]);
  const movieToken = localStorage.getItem(JSON.parse("movieToken"));

  useEffect(() => {
    // Fetch movies from the API with authorization header
    fetch("http://localhost:8080/movies/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${movieToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.msg);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [movieToken]); 

  return (
    <div className="content-container">
      {movies.map((movie) => (
        <div key={movie._id} className="movie-card">
          <img src={movie.imageUrl} alt={movie.title} className="movie-image" />
          <div className="movie-details">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-genre">{movie.genre}</p>
            <p className="movie-rating">{`Rating: ${movie.rating}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;

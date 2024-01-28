import React, { useState, useEffect } from "react";
import { Stack, Skeleton, useToast ,SimpleGrid} from "@chakra-ui/react";
import Card from "./Card";

function Content() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useToast();
  const task='Add To'

  const addWatchlist = (movieId) => {
    fetch(`https://flix-rgt6.onrender.com/users/watchlist/${movieId}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${movieToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 409) {
          console.log("Movie is already in watchlist");
          return;
        }
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        toast({
          title: "Success",
          description: data.msg,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  };


  const movieToken = JSON.parse(localStorage.getItem("movieToken"));
  

  const fetchData = async () => {
    try {
      const response = await fetch("https://flix-rgt6.onrender.com/movies", {
        method: "GET",
        headers: {
          authorization: `Bearer ${movieToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Could not fetch the data for that resource");
      }

      const data = await response.json();
      setMovies(data.msg);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setIsLoading(false);
      setError("Error fetching data. Please try again later.");
      toast({
        title: "Error",
        description: "Failed to fetch movies. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [movieToken, toast]);

  return (
    <div>
      {isLoading && (
        <Stack>
          <Skeleton height="200px" />
          <Skeleton height="200px" />
          <Skeleton height="200px" />
        </Stack>
      )}

      <SimpleGrid columns={3} spacing={4} mt={30} ml={20}>
        {movies.length > 0 &&
          movies.map((movie) => {
            return <Card key={movie._id} movie={movie} addWatchlist={addWatchlist} task={task} />;
          })}
      </SimpleGrid>

      {error && <div>{error}</div>}
    </div>
  );
}

export default Content;

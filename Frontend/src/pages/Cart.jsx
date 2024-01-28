import React, { useState, useEffect } from "react";
import { Stack, Skeleton, useToast, SimpleGrid,Box,Text, Button } from "@chakra-ui/react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

function Cart() {

  const page='cart'
  const movieToken = JSON.parse(localStorage.getItem("movieToken"));
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useToast();
  const task= "Remove From"
  const removeWatchlist = (movieId) => {
    fetch(`https://flix-rgt6.onrender.com/users/watchlist/${movieId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${movieToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMovies(data.movies);
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

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://flix-rgt6.onrender.com/users/watchlist",
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${movieToken}`,
            "Content-Type": "application/json",
          },
        }
      );

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
      <Navbar page={page}/>
      <div>
        {isLoading && (
          <Stack>
            <Skeleton height="200px" />
            <Skeleton height="200px" />
            <Skeleton height="200px" />
          </Stack>
        )}

        {!isLoading && movies.length > 0 && (
          <SimpleGrid columns={3} spacing={4} mt={30} ml={20}>
            {movies.map((movie) => (
              <Card key={movie._id} movie={movie} addWatchlist={removeWatchlist} task={task}/>
            ))}
          </SimpleGrid>
        )}

        {!isLoading && movies.length === 0 && (
          <Box mt={"40vh"} ml={"40%"} display={'flex'}>
            <Text fontSize="30px" color="red">
              You Haven't Saved any Movies yet
            </Text>
          </Box>
        )}

        {error && <div>{error}</div>}
      </div>
    </div>
  );
}

export default Cart;

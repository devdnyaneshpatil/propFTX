import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";

function Card({ movie ,addWatchlist,task}) {
    const handleAddWatchlist = () => {
      addWatchlist(movie._id);
    };
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="md"
      transition="transform 0.2s ease-in-out"
      _hover={{ transform: "scale(1.05)" }}
      textAlign="center" // Center the content
    >
      <Image
        src={movie.img}
        alt={movie.title}
        height="200px"
        objectFit="cover" 
        mx="auto" 
      />
      <Box mt="3">
        <Heading size="md" fontWeight="semibold">
          {movie.title}
        </Heading>
        <Text mt="2" mb={3}>Rating:-{movie.rating}</Text>
        <Button onClick={handleAddWatchlist} colorScheme="twitter">{task} Watchlist</Button>
      </Box>
    </Box>
  );
}

export default Card;

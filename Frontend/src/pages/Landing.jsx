import React from "react";
import Navbar from "../components/Navbar";
import { Container, Box, Heading, Button, ButtonGroup } from "@chakra-ui/react";

function Landing() {
  return (
    <div>
      <Navbar></Navbar>
      <Box
        backgroundImage="url('https://st3.depositphotos.com/1064045/15061/i/450/depositphotos_150614902-stock-photo-unusual-cinema-concept-3d-illustration.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        width="100%"
        height="calc(100vh - 90px)"
      >
        <Box p="300px 30px">
          <Heading>WELCOME TO MOVIFLIX</Heading>
          <Button colorScheme="yellow" mt={5} ml={20}>
            Get Started
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Landing;

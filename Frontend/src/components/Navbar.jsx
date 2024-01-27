import { Button, Flex, HStack, Heading, Input } from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons"; 
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <Flex
      as="nav"
      alignItems={"center"}
      justifyContent="space-between"
      width={"100%"}
      bg={"whitesmoke"}
      p={5}
    >
      <Heading>MOVIFLIX</Heading>
      <HStack>
        <Input
          variant="flushed"
          placeholder="Search Your Movie"
          width={400}
          p={5}
          mr={3}
          bg={"grey.50"}
        />
        <Button colorScheme="twitter">SEARCH</Button>
      </HStack>
      <HStack>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="whatsapp"
          variant="outline"
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button colorScheme="whatsapp">Saved</Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;

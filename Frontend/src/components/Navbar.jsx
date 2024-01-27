import { Button, Flex, HStack, Heading, Input } from "@chakra-ui/react";

import { ArrowForwardIcon } from "@chakra-ui/icons"; 
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({page}) {
  console.log(page)
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout=()=>{
    navigate("/")
  }
  const handleSaved = () => {
    navigate("/cart");
  };
  const handleHome=()=>{
    navigate("/home")
  }
  
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
      {page != "landing" && (
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
      )}
      <HStack>
        {page == "home" || page == "cart" ? (
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="whatsapp"
            variant="outline"
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="whatsapp"
            variant="outline"
            onClick={handleLogin}
          >
            Login
          </Button>
        )}
        {page !== "landing" &&
          (page !== "cart" ? (
            <Button colorScheme="whatsapp" onClick={handleSaved}>
              Saved
            </Button>
          ) : (
            <Button colorScheme="whatsapp" onClick={handleHome}>
              Home
            </Button>
          ))}
      </HStack>
    </Flex>
  );
}

export default Navbar;

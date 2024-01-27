import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  Input,
  Button,
  Text,
  Link as ChakraLink,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

function Login() {
  //show password functionality
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  //show password functionality ends

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    fetch("https://movieflix-ht2n.onrender.com/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Login successful:", data);
        alert(data.msg);
        localStorage.setItem("movieToken", JSON.stringify(data.token));

        if (data.msg === "Login Successfull") {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error.message);
      });
  };

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  return (
    <Box textAlign="center" mt={200}>
      <Box
        backgroundColor="#fff"
        padding="40px"
        borderRadius="8px"
        boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
        maxWidth="400px"
        width="100%"
        margin="0 auto"
      >
        <Heading color="#333" fontSize="32px" marginBottom="20px">
          Login to MOVIFLEX
        </Heading>
        <form>
          <Box marginBottom="20px" textAlign="left">
            <Text
              display="block"
              marginBottom="8px"
              color="#333"
              fontSize="16px"
              fontWeight="bold"
            >
              Email
            </Text>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box marginBottom="20px" textAlign="left">
            <Text
              display="block"
              marginBottom="8px"
              color="#333"
              fontSize="16px"
              fontWeight="bold"
            >
              Password
            </Text>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          <Button
            colorScheme="facebook"
            transition="background-color 0.3s ease, transform 0.3s ease"
            _hover={{ backgroundColor: "#0056b3", transform: "scale(1.05)" }}
            _active={{ transform: "scale(0.95)" }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
        <Box marginTop="20px" fontSize="14px">
          Don't have an account?{" "}
          <ChakraLink
            color="#007bff"
            cursor="pointer"
            _hover={{ textDecoration: "underline" }}
            onClick={handleSignupRedirect}
          >
            SignUp
          </ChakraLink>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;

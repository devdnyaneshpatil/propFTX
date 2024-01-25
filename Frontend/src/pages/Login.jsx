import React, { useState } from "react";
import "./Login.css"; 
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault()
   
    const payload={
        email,
        password
    }

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

        if (data.msg == "Login Successfull") {
          navigate("/home");
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error during login:", error.message);
      });
  };

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <h1>Login to MOVIEFLEX</h1>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </form>
        <div className="signup-text">
          Don't have an account?{" "}
          <span className="signup-link" onClick={handleSignupRedirect}>
            SignUp
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;

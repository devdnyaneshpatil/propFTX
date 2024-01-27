import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      password,
    };

    fetch("https://movieflix-ht2n.onrender.com/users/register", {
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
        console.log(data);
        alert(data.msg); // Show a message or handle feedback as needed

        if (data.msg === "User Registered Successfully") {
          // User successfully registered, navigate to the home page
          navigate("/home");
        }
      })
      .catch((error) => {
        console.error("Error during signup:", error.message);
      });
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <h1>Signup for MOVIEFLEX</h1>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <button className="login-button" onClick={handleSignup}>
            Signup
          </button>
        </form>
        <div className="signup-text">
          Already have an account?{" "}
          <span className="signup-link" onClick={handleLoginRedirect}>
            Login
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;

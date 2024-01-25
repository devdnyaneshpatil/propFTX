import React, { useState } from "react";
import "./Login.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    // Add your login logic here
    e.preventDefault()
    // For demonstration purposes, log the email and password to the console
    const payload={
        email,
        password
    }

    // You can replace the above console logs with your actual login logic
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

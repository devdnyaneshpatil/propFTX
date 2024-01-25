// Signup.jsx
import React from "react";
import "./Signup.css"; // Import your CSS file
import { Link, useNavigate } from "react-router-dom";

function Signup({  }) {
    const navigate=useNavigate()
    const handleLoginRedirect = () => {
      // Add code to navigate to the signup page
      // You can use react-router-dom or any other navigation method here
      navigate("/");
    };
    const handleSignup=()=>{
        
    }
  return (
    <div className="main-container">
      <div className="login-container">
        <h1>Signup for MOVIEFLEX</h1>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
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

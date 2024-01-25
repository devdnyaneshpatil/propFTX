import React from "react";
import "./Header.css"; 
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  function hadleLogout(){
    navigate("/")
  }
  function handleCart(){
    navigate("/cart")
  }
  return (
    <div className="navbar">
      <div className="logo">MovieFlix</div>
      <div className="search-container">
        <input type="text" placeholder="Search your movie here" />
        <button>Search</button>
      </div>
      <div className="user-actions">
        <button onClick={hadleLogout}>Logout</button>
        <button onClick={handleCart}>Saved </button>
      </div>
    </div>
  );
}

export default Header;

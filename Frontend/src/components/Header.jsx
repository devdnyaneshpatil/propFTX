import React from "react";
import "./Header.css"; // Import your CSS file

function Header() {
  return (
    <div className="navbar">
      <div className="logo">MovieFlix</div>
      <div className="search-container">
        <input type="text" placeholder="Search your movie here" />
        <button>Search</button>
      </div>
      <div className="user-actions">
        <button>Logout</button>
        <button>Saved</button>
      </div>
    </div>
  );
}

export default Header;

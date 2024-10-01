import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h3>Dashboard / Default</h3>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="icons">
          <i className="fas fa-sun"></i>
          <i className="fas fa-bell"></i>
          <i className="fas fa-user-circle"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;

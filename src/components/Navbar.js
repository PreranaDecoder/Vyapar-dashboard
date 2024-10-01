import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  //faStar,
  faSearch,
  faCog,
  faBell,
  faSyncAlt,
  faMoon,
  faColumns,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="breadcrumbs">
        <FontAwesomeIcon icon={faHome} />
        <span>Dashboards</span> /<span className="active">Default</span>
      </div>
      <div className="actions">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search" />
        </div>
        <FontAwesomeIcon icon={faMoon} className="icon" />
        <FontAwesomeIcon icon={faSyncAlt} className="icon" />
        <FontAwesomeIcon icon={faCog} className="icon" />
        <FontAwesomeIcon icon={faBell} className="icon" />
        <FontAwesomeIcon icon={faColumns} className="icon" />
      </div>
    </div>
  );
};

export default Navbar;

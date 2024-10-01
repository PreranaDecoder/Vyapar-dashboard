import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faShoppingCart,
  faProjectDiagram,
  faBook,
  faUser,
  faBuilding,
  faUsers,
  faFileAlt,
  faBlog,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  const [openDashboards, setOpenDashboards] = useState(true); // Default open for "Dashboards"
  const [openPages, setOpenPages] = useState(false);
  const [openUserProfile, setOpenUserProfile] = useState(false); // Control sublist under User Profile

  const toggleDashboards = () => {
    setOpenDashboards(!openDashboards);
  };

  const togglePages = () => {
    setOpenPages(!openPages);
  };

  const toggleUserProfile = () => {
    setOpenUserProfile(!openUserProfile);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <h2 className="title">
          <span className="bold">Vya</span>
          <span className="highlight bold">par</span>{" "}
          <span className="bold">Launch</span>
          <span className="highlight bold">pad</span> <br></br>
          <span className="bold">Super Admin</span>
        </h2>
      </div>

      <ul className="menu">
        <li className="menu-item" onClick={toggleDashboards}>
          <FontAwesomeIcon icon={faTachometerAlt} /> Dashboards
        </li>
        {openDashboards && (
          <ul className="submenu">
            <li className="submenu-item">
              <FontAwesomeIcon icon={faChartLine} /> Default
            </li>
            <li className="submenu-item">
              <FontAwesomeIcon icon={faShoppingCart} /> eCommerce
            </li>
            <li className="submenu-item">
              <FontAwesomeIcon icon={faProjectDiagram} /> Projects
            </li>
            <li className="submenu-item">
              <FontAwesomeIcon icon={faBook} /> Online Courses
            </li>
          </ul>
        )}

        <li className="menu-item" onClick={togglePages}>
          <FontAwesomeIcon icon={faFileAlt} /> Pages
        </li>
        {openPages && (
          <ul className="submenu">
            <li className="submenu-item" onClick={toggleUserProfile}>
              <FontAwesomeIcon icon={faUser} /> User Profile
            </li>
            {openUserProfile && (
              <ul className="sub-submenu">
                <li className="submenu-item">Overview</li>
                <li className="submenu-item">Projects</li>
                <li className="submenu-item">Campaigns</li>
                <li className="submenu-item">Documents</li>
                <li className="submenu-item">Followers</li>
              </ul>
            )}
            <li className="submenu-item">
              <FontAwesomeIcon icon={faBuilding} /> Account
            </li>
            <li className="submenu-item">
              <FontAwesomeIcon icon={faBuilding} /> Corporate
            </li>
            <li className="submenu-item">
              <FontAwesomeIcon icon={faBlog} /> Blog
            </li>
            <li className="submenu-item">
              <FontAwesomeIcon icon={faUsers} /> Social
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;

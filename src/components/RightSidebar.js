import React, { useState } from "react";
import user1 from "../assets/images/user1.jpg"; // Adjust the path according to your folder structure
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";
import user4 from "../assets/images/user4.jpg";
import "./RightSidebar.css"; // Ensure CSS is correctly linked

const RightSidebar = () => {
  // State to control dropdowns for Notifications, Activities, and Contacts
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section); // Toggle section open/close
  };

  const getArrowClass = (section) => {
    return openSection === section ? "arrow open" : "arrow";
  };

  return (
    <div className="right-sidebar">
      {/* Notifications Section */}
      <div className="section">
        <h4
          onClick={() => toggleSection("notifications")}
          className="dropdown-header"
        >
          Notifications
          <span className={getArrowClass("notifications")}>&#9662;</span>
        </h4>
        {openSection === "notifications" && (
          <ul className="notification-list">
            <li>
              <div className="notification-icon">🔔</div>
              <div>
                <p>You have a bug that needs fixing</p>
                <span>Just now</span>
              </div>
            </li>
            <li>
              <div className="notification-icon">👤</div>
              <div>
                <p>New user registered</p>
                <span>59 minutes ago</span>
              </div>
            </li>
            <li>
              <div className="notification-icon">🔔</div>
              <div>
                <p>You have a bug that needs fixing</p>
                <span>12 hours ago</span>
              </div>
            </li>
            <li>
              <div className="notification-icon">📩</div>
              <div>
                <p>Andi Lane subscribed to you</p>
                <span>Today, 11:59 AM</span>
              </div>
            </li>
          </ul>
        )}
      </div>

      {/* Activities Section */}
      <div className="section">
        <h4
          onClick={() => toggleSection("activities")}
          className="dropdown-header"
        >
          Activities
          <span className={getArrowClass("activities")}>&#9662;</span>
        </h4>
        {openSection === "activities" && (
          <ul className="activity-list">
            <li>
              <div className="activity-icon">🐛</div>
              <div>
                <p>You have a bug that needs fixing</p>
                <span>Just now</span>
              </div>
            </li>
            <li>
              <div className="activity-icon">🚀</div>
              <div>
                <p>Released a new version</p>
                <span>59 minutes ago</span>
              </div>
            </li>
            <li>
              <div className="activity-icon">🐛</div>
              <div>
                <p>Submitted a bug</p>
                <span>12 hours ago</span>
              </div>
            </li>
            <li>
              <div className="activity-icon">📄</div>
              <div>
                <p>Modified A data in Page X</p>
                <span>Today, 11:59 AM</span>
              </div>
            </li>
            <li>
              <div className="activity-icon">🗑️</div>
              <div>
                <p>Deleted a page in Project X</p>
                <span>Feb 2, 2023</span>
              </div>
            </li>
          </ul>
        )}
      </div>

      {/* Contacts Section */}
      <div className="section">
        <h4
          onClick={() => toggleSection("contacts")}
          className="dropdown-header"
        >
          Contacts
          <span className={getArrowClass("contacts")}>&#9662;</span>
        </h4>
        {openSection === "contacts" && (
          <ul className="contact-list">
            <li>
              <img src={user1} alt="User 1" /> Natali Craig
            </li>
            <li>
              <img src={user2} alt="User 2" /> Drew Cano
            </li>
            <li>
              <img src={user3} alt="User 3" /> Orlando Diggs
            </li>
            <li>
              <img src={user4} alt="User 4" /> Andi Lane
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default RightSidebar;

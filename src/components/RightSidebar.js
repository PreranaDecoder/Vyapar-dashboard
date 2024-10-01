import React from "react";
import "./RightSidebar.css";

// Import user images (if using local images)
import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";
import user4 from "../assets/images/user4.jpg";
import user5 from "../assets/images/user5.jpg";
import user6 from "../assets/images/user6.jpg";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      {/* Notifications Section */}
      <div className="section">
        <h4>Notifications</h4>
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
      </div>

      {/* Activities Section */}
      <div className="section">
        <h4>Activities</h4>
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
      </div>

      {/* Contacts Section */}
      <div className="section">
        <h4>Contacts</h4>
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
          <li>
            <img src={user5} alt="User 5" /> Kate Morrison
          </li>
          <li>
            <img src={user6} alt="User 6" /> Koray Okumus
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;

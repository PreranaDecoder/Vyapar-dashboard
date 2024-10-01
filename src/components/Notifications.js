import React from "react";
import "./Notifications.css";

const Notifications = () => {
  return (
    <div className="notifications">
      <h4>Notifications</h4>
      <ul>
        <li>You have a bug that needs fixing</li>
        <li>New user registered</li>
        <li>Andi Lane subscribed to you</li>
      </ul>

      <h4>Activities</h4>
      <ul>
        <li>Submitted a bug</li>
        <li>Released a new version</li>
      </ul>

      <h4>Contacts</h4>
      <ul>
        <li>Natali Craig</li>
        <li>Drew Cano</li>
      </ul>
    </div>
  );
};

export default Notifications;

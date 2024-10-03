import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import RightSidebar from "./components/RightSidebar";
// import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        {/* <Navbar /> */}
        <Dashboard />
      </div>
      <RightSidebar />
    </div>
  );
}

export default App;

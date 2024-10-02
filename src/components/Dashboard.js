import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "./Dashboard.css";

// Mock data for charts
const dataLine = [
  { name: "Jan", current: 10, previous: 15 },
  { name: "Feb", current: 15, previous: 25 },
  { name: "Mar", current: 25, previous: 30 },
  { name: "Apr", current: 22, previous: 32 },
  { name: "May", current: 30, previous: 20 },
];

const dataBar = [
  { name: "Linux", value: 12, color: "#95A4FC" },
  { name: "Mac", value: 18, color: "#BAEDBD" },
  { name: "Window", value: 19, color: "#B1E3FF" },
  { name: "iOS", value: 22, color: "#1C1C1C" },
  { name: "Android", value: 15, color: "#A8C5DA" },
  { name: "Other", value: 20, color: "#A1E3CB" },
];

const pieData = [
  { name: "United States", value: 38.6 },
  { name: "Canada", value: 22.5 },
  { name: "Mexico", value: 30.8 },
  { name: "Other", value: 8.1 },
];

const marketingData = [
  { name: "Jan", value: 20, color: "#95A4FC" },
  { name: "Feb", value: 25, color: "#BAEDBD" },
  { name: "Mar", value: 30, color: "#1C1C1C" },
  { name: "Apr", value: 28, color: "#B1E3FF" },
  { name: "May", value: 35, color: "#B1E3FF" },
  { name: "Jun", value: 40, color: "#A1E3CB" },
  { name: "July", value: 20, color: "#95A4FC" },
  { name: "Aug", value: 25, color: "#BAEDBD" },
  { name: "Sept", value: 30, color: "#1C1C1C" },
  { name: "Oct", value: 28, color: "#B1E3FF" },
  { name: "Nov", value: 35, color: "#B1E3FF" },
  { name: "Dec", value: 40, color: "#A1E3CB" },
];

const COLORS = ["#95A4FC", "#BAEDBD", "#1C1C1C", "#B1E3FF"];

const websiteTrafficData = [
  { name: "Instagram", traffic: 80 },
  { name: "Google", traffic: 50 },
  { name: "YouTube", traffic: 30 },
  { name: "Pinterest", traffic: 20 },
  { name: "Facebook", traffic: 40 },
  { name: "Twitter", traffic: 25 },
  { name: "Tumblr", traffic: 15 },
];

const Dashboard = () => {
  const [selectedDay, setSelectedDay] = useState("Today");

  const days = ["Today", "Yesterday", "Last 7 Days", "Last 30 Days"];

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  return (
    <div className="dashboard">
      {/* Dropdown for Day Selection */}
      <div className="header">
        <h3>
          <select
            value={selectedDay}
            onChange={handleDayChange}
            className="dropdown-select"
          >
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </h3>
      </div>

      {/* Stats Cards */}
      <div className="stats-cards">
        <div className="card">
          <h4>Views</h4>
          <h1 className="number">721K</h1>
          <span className="change positive">+11.01% ⬆</span>
        </div>
        <div className="card1">
          <h4>Visits</h4>
          <h1 className="number">367K</h1>
          <span className="change negative">-0.03% ⬇</span>
        </div>
        <div className="card">
          <h4>New Users</h4>
          <h1 className="number">1,156</h1>
          <span className="change positive">+15.03% ⬆</span>
        </div>
        <div className="card1">
          <h4>Active Users</h4>
          <h1 className="number">239K</h1>
          <span className="change positive">+6.08% ⬆</span>
        </div>
      </div>

      {/* Total Users and Traffic by Website */}
      <div className="charts-container">
        <div className="line-chart">
          <h3>Total Users</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataLine}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="current"
                stroke="#000"
                strokeWidth={2}
                dot={{ r: 5 }}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="previous"
                stroke="#82ca9d"
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Traffic by Website */}
        <div className="traffic-by-website">
          <h3>Traffic by Website</h3>
          <ul className="traffic-list">
            {websiteTrafficData.map((site) => (
              <li key={site.name}>
                <span>{site.name}</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${site.traffic}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Traffic by Device and Location */}
      <div className="charts-container-1">
        <div className="bar-chart">
          <h3>Traffic by Device</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataBar} barSize={20}>
              {" "}
              {/* Adjusted barSize */}
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {dataBar.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="pie-chart">
          <h3>Traffic by Location</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                fill="#8884d8"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          {/* Location names and frequencies */}
          <ul className="location-list">
            {pieData.map((entry, index) => (
              <li key={`location-${index}`}>
                <span
                  className="location-color"
                  style={{
                    backgroundColor: COLORS[index % COLORS.length],
                    display: "inline-block",
                    width: "10px",
                    height: "10px",
                    marginRight: "10px",
                    borderRadius: "5px",
                  }}
                ></span>
                {entry.name}: {entry.value}%
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Marketing & SEO */}
      <div className="line-chart">
        <h3>Marketing & SEO</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={marketingData} barSize={20}>
            {" "}
            {/* Adjusted barSize */}
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {marketingData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;

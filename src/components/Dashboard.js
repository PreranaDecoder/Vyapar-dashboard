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
  { name: "Linux", value: 12 },
  { name: "Mac", value: 18 },
  { name: "iOS", value: 22 },
  { name: "Windows", value: 15 },
  { name: "Android", value: 19 },
];

const pieData = [
  { name: "United States", value: 38.6 },
  { name: "Canada", value: 22.5 },
  { name: "Mexico", value: 30.8 },
  { name: "Other", value: 8.1 },
];

const marketingData = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 25 },
  { name: "Mar", value: 30 },
  { name: "Apr", value: 28 },
  { name: "May", value: 35 },
  { name: "Jun", value: 40 },
  { name: "Jul", value: 35 },
  { name: "Aug", value: 30 },
  { name: "Sep", value: 35 },
  { name: "Oct", value: 40 },
  { name: "Nov", value: 35 },
  { name: "Dec", value: 40 },
];

// Mock data for traffic by website
const websiteTrafficData = [
  { name: "Instagram", traffic: 80 },
  { name: "Google", traffic: 50 },
  { name: "YouTube", traffic: 30 },
  { name: "Pinterest", traffic: 20 },
  { name: "Facebook", traffic: 40 },
  { name: "Twitter", traffic: 25 },
  { name: "Tumblr", traffic: 15 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

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
      <div className="charts-container">
        <div className="bar-chart">
          <h3>Traffic by Device</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataBar}>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <Bar dataKey="value" fill="#82ca9d" />
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
                outerRadius={80}
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
        </div>
      </div>

      {/* Marketing & SEO */}
      <div className="line-chart">
        <h3>Marketing & SEO</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={marketingData}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;

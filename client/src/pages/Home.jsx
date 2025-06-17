import React, { useState } from "react";
import { fetchGitHubData } from "../api";
import ChartComponent from "../components/ChartComponents";

const Home = () => {
  const [username, setUsername] = useState("");
  const [days, setDays] = useState(7); // Default: last 7 days
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!username) {
      setError("Please enter a GitHub username.");
      return;
    }

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const result = await fetchGitHubData(username, days);
      if (Object.keys(result).length === 0) {
        setError("No recent public activity found for this user.");
      } else {
        setData(result);
      }
    } catch (err) {
      setError("Account does exist, please check your username.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      <h2>GitHub Activity Analyzer</h2>
      <div className="for-css">
        <div className="input-section">
          <input
            type="text"
            placeholder="Enter GitHub Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <select
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
          >
            <option value={7}>Last 7 days</option>
            <option value={14}>Last 14 days</option>
            <option value={30}>Last 30 days</option>
          </select>

          <button onClick={handleSearch}>Fetch</button>
        </div>

        {loading && <p>Loading...</p>}
        {error && <p className="error-msg">{error}</p>}
        {data && <ChartComponent data={data} />}
        <button>
        <a href={`https://www.github.com/${username}`} target="_blank">GitHub Account</a>
      </button>
      </div>
    </div>
  );
};

export default Home;

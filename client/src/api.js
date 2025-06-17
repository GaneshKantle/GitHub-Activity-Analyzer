// ==== client/src/api.js ====
import axios from 'axios';

export const fetchGitHubData = async (username, days) => {
  const res = await axios.get(`https://github-activity-analyzer.onrender.com/api/github/${username}?days=${days}`);
  return res.data;
};

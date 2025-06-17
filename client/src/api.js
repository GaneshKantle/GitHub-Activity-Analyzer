// ==== client/src/api.js ====
import axios from 'axios';

export const fetchGitHubData = async (username, days) => {
  const res = await axios.get(`http://localhost:5000/api/github/${username}?days=${days}`);
  return res.data;
};
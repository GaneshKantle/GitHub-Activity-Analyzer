// ==== server/routes/github.js ====
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/:username", async (req, res) => {
  const { username } = req.params;
  const days = Number(req.query.days) || 7;
  
  try {
    const eventsRes = await axios.get(
      `https://api.github.com/users/${username}/events/public`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);


    const activityPerDay = {};
    eventsRes.data.forEach((event) => {
    const date = new Date(event.created_at).toISOString().slice(0, 10);
      if (!activityPerDay[date]) activityPerDay[date] = 0;

      switch (event.type) {
        case "PushEvent":
          activityPerDay[date] += event.payload.commits.length;
          break;
        case "PullRequestEvent":
        case "IssuesEvent":
        case "IssueCommentEvent":
        case "CreateEvent":
          activityPerDay[date] += 1;
          break;
        default:
          break;
      }
    });

    res.json(activityPerDay);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

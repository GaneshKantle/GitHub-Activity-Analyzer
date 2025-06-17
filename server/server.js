const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const githubRoutes = require('./routes/github');
app.use('/api/github', githubRoutes);

app.get('/', (req, res) => {
  res.send('GitHub Activity Analyzer API is running 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

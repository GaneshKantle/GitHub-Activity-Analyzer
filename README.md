# GitHub Activity Analyzer

A full-stack MERN (MongoDB, Express, React, Node.js) web application that visualizes the recent public GitHub activity (commits, PRs, issues, comments, etc.) of any GitHub user.

![GitHub Activity Chart](https://img.shields.io/badge/ChartJS-Activity_Visualization-blue)  
![Built with MERN](https://img.shields.io/badge/TechStack-MERN-blueviolet)

---

## 📸 Demo

> 🔗 [Live Preview](https://github-activity-analyzerr.vercel.app/)
> 📦 [Frontend Source Code](./client)  
> 🔧 [Backend Source Code](./server)

---

## ✨ Features

- 🔍 Enter any GitHub username and visualize public activity
- 📈 Line chart of contributions (Commits, PRs, Issues, etc.)
- 📅 Timeline auto-parsed by recent public events
- 🌐 Full MERN stack app
- 🧪 Error handling for missing or invalid usernames

---

## Directory structure:
```
└── ganeshkantle-github-activity-analyzer/
    ├── README.md
    ├── vercel.json
    ├── client/
    │   ├── README.md
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── .gitignore
    │   ├── public/
    │   │   ├── index.html
    │   │   ├── manifest.json
    │   │   └── robots.txt
    │   └── src/
    │       ├── api.js
    │       ├── App.css
    │       ├── App.js
    │       ├── App.test.js
    │       ├── index.css
    │       ├── index.js
    │       ├── reportWebVitals.js
    │       ├── setupTests.js
    │       ├── components/
    │       │   └── ChartComponents.jsx
    │       ├── pages/
    │       │   └── Home.jsx
    │       └── styles/
    │           └── app.css
    └── server/
        ├── package-lock.json
        ├── package.json
        ├── server.js
        └── routes/
            └── github.js
```

---

## 🧠 How It Works

1. The user enters a GitHub username.
2. The frontend sends a request to the backend (`/api/github/:username`).
3. The backend uses GitHub’s Public Events API to fetch recent activities.
4. The events are parsed into a date-wise contribution object.
5. The frontend renders it as a line chart using `Chart.js`.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/GaneshKantle/GitHub-Activity-Analyzer.git
cd GitHub-Activity-Analyzer
```
### 2. Setup Backend

```bash
cd server
npm install
```
#### 📌 Create .env in /server with your GitHub Personal Access Token:

```bash
GITHUB_TOKEN=your_github_pat_here
```
#### Then run:
```bash
node server.js
```

### 3. Setup Frontend

```bash
cd ../client
npm install
npm start
```

## 🔧 Tech Stack
- **Frontend**: React, Axios, Chart.js
- **Backend**: Node.js, Express.js, GitHub REST API
- **Others**: CORS, dotenv


## 🛡️ Security
- **Note**: .env is added to .gitignore to prevent token exposure.
- Never commit .env or personal tokens publicly.


## Contributing
If you'd like to contribute, please fork the repository and submit a pull request. All contributions are welcome!


## Contact
For any queries, feel free to reach out:
- **Email:** ganeshkantle@gmail.com
- **My Portfolio:** (https://ganesh-portfolio-dusky.vercel.app/)

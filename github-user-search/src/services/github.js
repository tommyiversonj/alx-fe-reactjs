// src/services/github.js
import axios from "axios";

const githubAPI = axios.create({
    baseURL: "https://api.github.com", // Base GitHub API URL
    headers: {
        Accept: "application/vnd.github.v3+json",
        // Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`, // Optional if using key
    },
});

export default githubAPI;

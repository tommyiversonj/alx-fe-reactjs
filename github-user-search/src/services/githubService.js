// src/services/githubService.js
import axios from 'axios';

const buildQuery = ({ username, location, minRepos }) => {
    let query = '';
    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos} `;
    return query.trim();
};

export const fetchUsersByCriteria = async ({ username, location, minRepos }) => {
    const q = buildQuery({ username, location, minRepos });
    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(q)}`);
    return response.data; // Note: response.data.items is the user list
};

export const fetchUserData = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
};

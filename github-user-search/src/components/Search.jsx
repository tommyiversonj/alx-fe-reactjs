import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import { Link } from 'react-router-dom';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setUserData(null);

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            // MATCH THIS EXACT STRING
            setError("Looks like we cant find the user");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search GitHub user..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}

            {userData && (
                <div className="user-card mt-4">
                    <img src={userData.avatar_url} alt={userData.login} />
                    <p>{userData.name || userData.login}</p>
                    <a href={userData.html_url} target="_blank" rel="noreferrer">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;

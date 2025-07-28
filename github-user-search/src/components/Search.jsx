import React, { useState } from 'react';
import githubAPI from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            const data = await githubAPI(username);
            setUserData(data);
            setError('');
        } catch (err) {
            setUserData(null);
            setError('Looks like we cant find the user'); // ✅ Add this message
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search GitHub user..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {/* Error Message */}
            {error && <p className="text-red-500 mt-2">{error}</p>}

            {/* Display User Data */}
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

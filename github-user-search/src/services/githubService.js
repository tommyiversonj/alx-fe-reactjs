import githubAPI from './github'; // This uses the configured axios instance

const fetchUserData = async (username) => {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
};

export default fetchUserData;

import axios from 'axios';

export default axios.create({
    baseURL: `https://api.pexels.com/`,
    headers: {
        Authorization: process.ENV.PEXELS_API_KEY
    }
});

import axios from 'axios';

export default axios.create({
    baseURL: `https://api.pexels.com/`,
    headers: {
        Authorization: process.ENV.REACT_APP_PEXELS_API_KEY
    }
});

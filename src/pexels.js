import axios from 'axios';

export default axios.create({
    baseURL: `https://api.pexels.com/`,
    headers: {
        Authorization: '563492ad6f91700001000001c7912b3d1ca84ce3921b9f846a8bd684'
    }
});
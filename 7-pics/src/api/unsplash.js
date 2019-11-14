import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a99bcd42b59af89e604b86a836d7ba0523f044f7413d432e8705dcf86b2b0cf2'
    }
})
import axios from 'axios';

const KEY = 'AIzaSyBGSrJM4RmPXVWwWy41FSF1h-IT414l6KM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

});
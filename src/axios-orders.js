import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-f1e16.firebaseio.com/'
});

export default instance;
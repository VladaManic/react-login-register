import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-login-register-667e6-default-rtdb.firebaseio.com/'
});
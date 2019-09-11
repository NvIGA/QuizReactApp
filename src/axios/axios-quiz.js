import axios from 'axios';

export default axios.create({
    baseURL: "https://quiz-app-40123.firebaseio.com/"
})

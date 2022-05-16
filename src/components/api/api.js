import axios from "axios";

const api = axios.create({
    baseURL:"https://geekstorede.herokuapp.com" 
});

export default api;
import axios from "axios";

const api = axios.create({
    baseURL:"https//localhost:5000" //URL DA API 
});

export default api;
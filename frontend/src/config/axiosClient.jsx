import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 60000
})

export default axiosClient;
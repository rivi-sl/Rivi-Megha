import axios from "axios"

const instance = axios.create({
    baseURL: "https://cortex--api.herokuapp.com"
    // baseURL: "http://localhost:8000"
})

export default instance
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://irwing-happy-nlw3.herokuapp.com/',
})

export default api;
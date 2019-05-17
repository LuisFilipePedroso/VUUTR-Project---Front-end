import axios from 'axios'

//make a new instance of axios, passing the base url.
const api = axios.create({
    'baseURL': 'http://localhost:3000'
})

export default api
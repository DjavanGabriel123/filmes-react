import axios from 'axios';

//URL DA API: https://api.themoviedb.org/3/movie/550?api_key=e638566aa4a2b2bcd63aa17f54325ee4
//BASE DA API: https://api.themoviedb.org/3/

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;
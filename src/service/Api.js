import axios from 'axios';


const API_KEY = '3e4f0d2ea3bccc4e250d1705bdc926eb';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const params = {
  params: { api_key: API_KEY,
    language: 'en-US',
},
};


export const fetchTrending = async () => {//список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
    const response = await axios.get(`trending/movie/day`, params);
    return response.data.results;
};


export const handleSearch = async (movieName) => { //пошук фільму за ключовим словом на сторінці фільмів.
    const response = await axios.get(`/search/movie?query=${movieName}`, params);
    return response.data.results;
  };


export const fetchMovieDetals = async (movieId) => {//запит повної інформації про фільм для сторінки кінофільму.
    const response = await axios.get(`/movie/${movieId}`, params);
    return response.data;

};

export const fetchMovieCast = async (movieId) => {//запит інформації про акторський склад для сторінки кінофільму.
    const response = await axios.get(`movie/${movieId}/credits?`, params);
    return response.data.cast;
  };

  

export const fetchMovieReviews = async movieId => {//запит оглядів для сторінки кінофільму.
  const response = await axios.get(`movie/${movieId}/reviews?`, params);
  return response.data.results;
};
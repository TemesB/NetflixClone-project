import React from 'react'
const API_KEY = "3515a4c2d9d1e0c36fa412b55aaf25c6"

    const requests = {
        fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    };
 
export default requests

// Example API Request = https://api.themoviedb.org/3/movie/550?api_key=3515a4c2d9d1e0c36fa412b55aaf25c6
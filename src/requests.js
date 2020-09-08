const API_KEY = '29c4256a2faf991409c5f4b5e2f2b0df';

const requests = {
  fetchTranding: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMoview: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMoview: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMoview: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMoview: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

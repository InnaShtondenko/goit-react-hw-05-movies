import axios from 'axios';
import { API_URL, API_KEY } from 'const/api';

axios.defaults.baseURL = API_URL;

export const getTrending = async () => {
  const url = '/trending/movie/day';
  const params = {
    api_key: API_KEY,
  };

  const queryData = await axios(url, { params });

  if (queryData?.status !== 200) throw new Error();

  return queryData.data.results;
};

export const getMovies = async searchQuery => {
  const url = '/search/movie';
  const params = {
    api_key: API_KEY,
    query: searchQuery,
  };

  const queryData = await axios(url, { params });

  if (queryData?.status !== 200) throw new Error();

  return queryData.data.results;
};

export const getMovie = async movieID => {
  const url = `/movie/${movieID}`;
  const params = {
    api_key: API_KEY,
  };

  const queryData = await axios(url, { params });

  if (queryData?.status !== 200) throw new Error();

  return queryData.data;
};

export const getCast = async movieID => {
  const url = `/movie/${movieID}/credits`;
  const params = {
    api_key: API_KEY,
  };

  const queryData = await axios(url, { params });

  if (queryData?.status !== 200) throw new Error();

  return queryData.data.cast;
};

export const getReviews = async movieID => {
  const url = `/movie/${movieID}/reviews`;
  const params = {
    api_key: API_KEY,
  };

  const queryData = await axios(url, { params });

  if (queryData?.status !== 200) throw new Error();

  return queryData.data.results;
};
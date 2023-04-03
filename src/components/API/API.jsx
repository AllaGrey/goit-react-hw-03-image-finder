import axios from 'axios';

const BASE_URL = `https://pixabay.com/api/?&image_type=photo&orientation=horizontal&per_page=12`;
const API_KEY = `key=33677116-85723a5144d957b1da7c90df9`;

export const getImages = (searchQuery, page) => {
  const URL = `${BASE_URL}&${API_KEY}&q=${searchQuery}&page=${page}`;
  return axios.get(URL);
};

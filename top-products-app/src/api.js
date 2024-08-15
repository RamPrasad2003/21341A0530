import axios from 'axios';

const API_URL = 'http://localhost:8000/test/index'; // Replace with your backend URL

export const getProducts = async (filters) => {
  const response = await axios.get(`${API_URL}/products`, { params: filters });
  console.log("cnscns"+response)
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};

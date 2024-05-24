// src/api/categoryApi.js
import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'http://localhost:8080/api.myservice.com/v1/admin';

const getAuthHeader = () => {
  const token = Cookies.get('token');
  return { Authorization: `Bearer ${token}` };
};

export const fetchCategories = (page = 0, size = 5, sort) => {
  return axios.get(`${BASE_URL}/categories`, {
    params: { page, size },
    headers: getAuthHeader(),
  });
};

export const addCategory = (categoryName, description) => {
  return axios.post(`${BASE_URL}/categories`, 
    { categoryName, description }, 
    { headers: getAuthHeader() }
  );
};

export const updateCategory = (categoryId, categoryName, description) => {
  return axios.put(`${BASE_URL}/categories/${categoryId}`, 
    { categoryName, description }, 
    { headers: getAuthHeader() }
  );
};

export const deleteCategory = (categoryId) => {
  return axios.delete(`${BASE_URL}/categories/${categoryId}`, 
    { headers: getAuthHeader() }
  );
};

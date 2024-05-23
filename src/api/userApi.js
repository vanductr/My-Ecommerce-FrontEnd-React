// src/api/userApi.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api.myservice.com/v1';

export const updateUser = async (token, userData) => {
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'multipart/form-data',
  };

  const formData = new FormData();
  formData.append('email', userData.email);
  formData.append('fullName', userData.fullName);
  formData.append('phone', userData.phone);
  formData.append('address', userData.address);
  if (userData.avatar) {
    formData.append('image', userData.avatar);
  }

  const response = await axios.put(`${BASE_URL}/user/account`, formData, { headers });
  return response.data;
};

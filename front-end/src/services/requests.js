import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const createUser = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  console.log(data);
  return data;
};

export const createSale = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const updateData = async (endpoint, body) => {
  await api.patch(endpoint, body);
};

export const deleteData = async (endpoint) => {
  await api.delete(endpoint);
};

export default api;

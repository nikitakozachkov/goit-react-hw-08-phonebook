import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export async function registerUser(credentials) {
  const { data } = await axios.post(`/users/signup`, credentials);
  setAuthHeader(data.token);

  return data;
}

export async function loginUser(credentials) {
  const { data } = await axios.post(`/users/login`, credentials);
  setAuthHeader(data.token);

  return data;
}

export async function logoutUser() {
  const { data } = await axios.post(`/users/logout`);
  clearAuthHeader();

  return data;
}

export async function refreshUser(token) {
  setAuthHeader(token);
  const { data } = await axios.get(`/users/current`);
  return data;
}
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

const register = (email, password, nickname, domain, introduce) => {
  return axios
    .post(API_URL + 'signup', {
      email,
      password,
      nickname,
      domain,
      introduce,
    })
    .catch((error) => {
      console.error(error);
    });
};

const login = (email, password) => {
  console.log('login start');
  return axios
    .post(API_URL + 'signin', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      console.log('response.data', response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;

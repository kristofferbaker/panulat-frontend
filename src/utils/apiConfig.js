import axios from 'axios'

const apiHost = `${process.env.NEXT_PUBLIC_BACKEND}`;

const axiosConfig = {
  baseURL: apiHost,
  headers: {},
};

const myAxios = axios.create(axiosConfig);

myAxios.interceptors.request.use(function (config) {
  if (localStorage.getItem('token')) {
    config.headers['Authorization'] = `Token ${localStorage.getItem('token')}`;
  }

  return config;
})

export default myAxios;

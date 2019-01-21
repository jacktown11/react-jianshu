import axios from 'axios';

if (process.env.NODE_ENV === 'development') {
  axios.interceptors.request.use(function(config) {
    config.url = config.url + '.json';
    return config;
  });
}

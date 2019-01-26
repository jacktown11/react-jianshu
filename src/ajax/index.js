import axios from 'axios';

axios.interceptors.request.use(function(config) {
  let url = config.url;
  if (process.env.NODE_ENV === 'production') {
    url = url.replace('/api', '/react-jianshu/api');
  }
  config.url = url + '.json';
  return config;
});

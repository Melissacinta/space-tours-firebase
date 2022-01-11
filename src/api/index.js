import axios from 'axios';

const Api = axios.create({
  baseURL: '/.netlify/functions/api/',
});

export const request = ({ ...options }) => {
  Api.defaults.headers.common.Authorization = `Bearer Token`;
  const onSuccess = (response) => response;
  const onError = (error) => {
    // optionally catch errors and add additional logging here
    // maybe redirect to login page to auth error
    return error;
  };

  return Api(options).then(onSuccess).catch(onError);
};

export default Api;

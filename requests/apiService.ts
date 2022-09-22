import {URLS} from './config';
import axios from 'axios';
import {boothInfoType} from '../store/types/types';
// import AsyncStorage from 'react-native';

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {AsyncStorage} from '@react-native-community/async-storage';

const headerData = async () => {
  // const token: string = await AsyncStorage.getItem('token');
  return {
    'Access-Control-Allow-Origin': '*',
    // Authorization: 'Bearer ' + token,
  };
};

const instance = axios.create({
  timeout: 30000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    // Authorization: 'Bearer ' + token,
  },
});

instance.interceptors.request.use((config:any) => {
  const token = '';
  config.headers.Authorization = 'Bearer ' + token;

  return config;
});

const responseBody = (response:any) => response;

const errorBody = (err:any) => {
  if (err.response) {
    // Request made and server responded
    console.log('err.response', err.response);
    return {
      statusCode: err.response.status,
    };
  } else if (err.request) {
    // The request was made but no response was received
    console.log('err.request', err.request);
    return 'Network Failiure, Please Check your network connection!';
  } else {
    // Something happened in setting up the request that triggered an err
    console.log('err', err.message);
    return err.message;
  }
};

const requests = {
  get: (url: string, headers = {...headerData}) =>
    instance.get(url, {headers}).then(responseBody).catch(errorBody),
  post: (url: string, body: {}, headers = {...headerData}) =>
    instance.post(url, body, {headers}).then(responseBody).catch(errorBody),

  put: (url: string, body: {}, headers = {...headerData}) =>
    instance.put(url, body, {headers}).then(responseBody).catch(errorBody),
};

export const Auth = {
  signIn: (data: {[key: string]: string | number}) =>
    requests.post(`${URLS.SIGN_IN}`, data),
  signUp: (data: {[key: string]: string | number}) => requests.post(`${URLS.SIGN_UP}`, data),
  sendBoothData: (data: {[key: string]: string | number}) =>
    requests.post(`${URLS.SEND_BOOTH_DATA}`, data),
};

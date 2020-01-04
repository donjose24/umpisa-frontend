import axios from 'axios';
import FetchError from './errors';

const BASE_URL = 'https://umpisa-backend.herokuapp.com/api/v1'

export const loginService = async params => {
  try {
    const response = await axios.post(BASE_URL + '/login', params);
    return response.data
  } catch (err) {
    throw new FetchError('Error logging in', err.response.data.errors);
  }
}

export const userDetailsService = async () => {
  const token = localStorage.getItem('access_token')
  try {
    const response = await axios.get(BASE_URL + '/user', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log(response)
    return response.data
  } catch (err) {
    throw new FetchError('Error logging in', err.response.data.errors);
  }
}

export const registrationService = async (params) => {
  try {
    const response = await axios.post(BASE_URL + '/register', params);
    return response.data
  } catch(err) {
    throw new FetchError('Error logging in', err.response.data.errors);
  }
}

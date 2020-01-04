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
    return response.data
  } catch (err) {
    throw new FetchError('Error fetching data', err.response.data.errors);
  }
}

export const registrationService = async (params) => {
  try {
    const response = await axios.post(BASE_URL + '/register', params);
    return response.data
  } catch(err) {
    throw new FetchError('Error fetching data', err.response.data.errors);
  }
}

export const topupService = async (params) => {
  const token = localStorage.getItem('access_token')
  try{
    const response = await axios.post(BASE_URL + '/topup', params, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data
  } catch (err) {
    throw new FetchError('Error fetching in', err.response.data.errors);
  }
}
export const balanceService = async () => {
  const token = localStorage.getItem('access_token')
  try{
    const response = await axios.get(BASE_URL + '/balance', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data
  } catch (err) {
    throw new FetchError('Error fetching in', err.response.data.errors);
  }
}
export const transactionService = async () => {
  const token = localStorage.getItem('access_token')
  try{
    const response = await axios.get(BASE_URL + '/transactions', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data
  } catch (err) {
    throw new FetchError('Error fetching data', err.response.data.errors);
  }
}

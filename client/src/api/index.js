const axios = require('axios');

const API = axios.create({ baseURL: 'https://campusvent.herokuapp.com' });
// const url = 'https://campusvent.herokuapp.com'
// const url = 'http://localhost:5000'

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchEvents = () => API.get('/events');
export const bookmarkEvent = (id) => API.patch(`/events/${id}/bookmarkEvent`)

export const signIn = (form) => API.post('/users/signin', form);
export const signUp = (form) => API.post('/users/signup', form);

// export const fetchEvents = () => axios.get(`${url}/events`)
// export const bookmarkEvent = (id) => axios.get(`${url}/events/${id}/bookmarkEvent`)

// export const signIn = (form) => axios.post(`${url}/users/signin`, form)
// export const signUp = (form) => axios.post(`${url}/users/signup`, form)
const axios = require('axios');

const API = axios.create({ baseURL: 'http://localhost:5000' });
// const url = 'https://campusvent.herokuapp.com'
// const url = 'http://localhost:5000'

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchEvents = () => API.get('/events');
export const bookmarkEvent = (id) => API.patch(`/events/${id}/bookmarkEvent`)

export const signIn = (form) => API.post('/users/signin', form);
export const signUp = (form) => API.post('/users/signup', form);

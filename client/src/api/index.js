const axios = require('axios');

const API = axios.create({ baseURL: 'http://localhost:5000' });
// const url = 'https://campusvent.herokuapp.com'
// const url = 'http://localhost:5000'


export const fetchEvents = () => API.get('/events');
export const bookmarkEvent = (id) => API.patch(`/events/${id}/bookmarkEvent`)

export const signIn = (form) => API.post('/users/signin', form);
export const signUp = (form) => API.post('/users/signup', form);

// export const fetchEvents = () => axios.get(`${url}/events`)
// export const bookmarkEvent = (id) => axios.get(`${url}/events/${id}/bookmarkEvent`)

// export const signIn = (form) => axios.post(`${url}/users/signin`, form)
// export const signUp = (form) => axios.post(`${url}/users/signup`, form)
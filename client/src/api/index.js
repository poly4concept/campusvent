const axios = require('axios');
const url = 'http://localhost:5000/events'

export const fetchEvents = () => axios.get(url);
export const bookmarkEvent = (id) => axios.patch(`${url}/${id}/bookmarkEvent`)
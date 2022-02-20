const axios = require('axios');
const url = 'https://campusvent.herokuapp.com/events'

export const fetchEvents = () => axios.get(url);
export const bookmarkEvent = (id) => axios.patch(`${url}/${id}/bookmarkEvent`)
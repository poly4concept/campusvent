import { FETCH_ALL } from '../constants/actionTypes';
import { fetchEvents, createEvents } from '../api/index'

export const getEvents = () => async (dispatch) => {
    try {
        const { data } = await fetchEvents();
        dispatch({ type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error);
    }
}
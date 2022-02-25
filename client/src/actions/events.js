import { FETCH_ALL, BOOKMARK, ERROR } from '../constants/actionTypes';
import { fetchEvents, bookmarkEvent } from '../api/index'

export const getEvents = () => async (dispatch) => {
    try {
        const { data } = await fetchEvents();
        dispatch({ type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR, payload: error.response.data.message})
    }
}

export const bookmark = (id) => async (dispatch) => {
    try {
        const { data } = await bookmarkEvent(id)
        console.log('her');
        dispatch({type: BOOKMARK, payload: data})
    } catch (error) {
        console.log(error)
        dispatch({ type: ERROR, payload: error.response.data.message})
    }
}
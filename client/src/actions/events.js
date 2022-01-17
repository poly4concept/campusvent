import { FETCH_ALL, BOOKMARK } from '../constants/actionTypes';
import { fetchEvents, bookmarkEvent } from '../api/index'

export const getEvents = () => async (dispatch) => {
    try {
        const { data } = await fetchEvents();
        dispatch({ type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const bookmark = (id) => async (dispatch) => {
    try {
        const { data } = await bookmarkEvent(id)
        dispatch({type: BOOKMARK, payload: data})
    } catch (error) {
        console.log(error)
    }
}
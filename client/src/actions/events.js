import { FETCH_ALL, BOOKMARK, ERROR, CREATE } from '../constants/actionTypes';
import { fetchEvents, createEvents,  bookmarkEvent } from '../api/index'

export const getEvents = () => async (dispatch) => {
    try {
        const { data } = await fetchEvents();
        dispatch({ type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR, payload: error.response.data.message})
    }
}

export const createEvent = (createData, navigate ) => async (dispatch) => {
    try {
        const { data } = await createEvents(createData);
        dispatch({ type: CREATE, payload: data })
        navigate('/home')
    } catch (error) {
        console.log(error);
        dispatch({ type: ERROR, payload: error.response.data.message})
    }
}

export const bookmark = (id) => async (dispatch) => {
    try {
        const { data } = await bookmarkEvent(id)
        dispatch({type: BOOKMARK, payload: data})
    } catch (error) {
        console.log(error)
        dispatch({ type: ERROR, payload: error.response.data.message})
    }
}
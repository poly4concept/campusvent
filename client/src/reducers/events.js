import { FETCH_ALL, CREATE, BOOKMARK } from "../constants/actionTypes"


const reducers = (events = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case BOOKMARK:
                return events.map((event) => event._id === action.payload._id ?  action.payload: event)
        case CREATE:
            return events
        default:
            return events
    }
}

export default reducers;
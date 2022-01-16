import { FETCH_ALL, CREATE } from "../constants/actionTypes"


const reducers = (events = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return events
        default:
            return events
    }
}

export default reducers;
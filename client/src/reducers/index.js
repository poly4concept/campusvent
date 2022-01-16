import { combineReducers } from "redux";
import events from './events'

export default combineReducers({
    events,
})


// when I start to have many selectors, i should use reselect libraries 
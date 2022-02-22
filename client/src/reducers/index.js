import { combineReducers } from "redux";
import events from './events'
import auth from './auth'

export default combineReducers({
    events, auth
})


// when I start to have many selectors, i should use reselect libraries 
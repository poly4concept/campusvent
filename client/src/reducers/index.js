import { combineReducers } from "redux";
import events from './events'
import auth from './auth'
import error from './error'

export default combineReducers({
    events, auth, error
})


// when I start to have many selectors, i should use reselect libraries 
import { ERROR } from "../constants/actionTypes"


const errorReducer = (state = {}, action) => {
    switch (action.type) {
        case ERROR:
            return  { ...state, errorMessage: action.payload };
        default:
            return state
    }
}

export default errorReducer;
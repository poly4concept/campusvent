import { AUTH, LOG_OUT } from "../constants/actionTypes"


const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }));
            return { ...state, authData: action.payload };
        case LOG_OUT:
            localStorage.removeItem('profile');
            return { ...state, authData: null };
        default:
            return state
    }
}

export default authReducer;
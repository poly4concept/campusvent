import { AUTH, LOG_OUT } from "../constants/actionTypes"


const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action.data };
        case LOG_OUT:
            localStorage.removeItem('profile');
            console.log('hi');
            return { ...state, authData: null };
        default:
            return state
    }
}

export default authReducer;
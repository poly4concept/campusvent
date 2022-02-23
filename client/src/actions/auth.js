import { AUTH } from '../constants/actionTypes';
import { signIn, signUp } from '../api/index'


export const signin = (form, navigate) => async (dispatch) => {
    try {
        const { data } = await signIn(form);
        dispatch({ type: AUTH, payload: data})
        navigate('/home')
    } catch (error) {
        console.log(error);
    }
}
export const signup = (form, navigate) => async (dispatch) => {
    try {
        const { data } = await signUp(form); 
        dispatch({ type: AUTH, payload: data})
        navigate('/home')
    } catch (error) {
        console.log(error);
    }
}
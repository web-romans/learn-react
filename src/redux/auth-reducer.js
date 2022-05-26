
import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;

    }
}

export const setAuthUserData = (data) => ({
    type: SET_USER_DATA, data
});

export const getAuthUserData = () => (dispatch) => {
    authAPI.authMe().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(response.data.data));
        }
    });
}

export default authReducer;  
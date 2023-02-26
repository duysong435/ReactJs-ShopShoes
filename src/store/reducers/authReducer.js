import actionTypes from "../actions/actionTypes";

const initState = {
    isLoggedIn: false,
    token: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                msg: '',
                update: false
            }
        case actionTypes.USER_LOGIN_FAILDED:
            return {

            }
        default:
            return state;
    }
}

export default authReducer;

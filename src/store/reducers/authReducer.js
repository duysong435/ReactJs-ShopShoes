import actionTypes from "../actions/actionTypes";

const initState = {
    isLoggedIn: false,
    token: null,
    role: ''
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            // state.role = action.data?.role
            console.log(action)
            return {
                ...state,
                isLoggedIn: true,
                token: action?.data?.token,
                role: action?.data?.role
            }
        case actionTypes.USER_LOGIN_FAILDED:
            return {
                ...state
            }
        case actionTypes.USER_LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                role: ''
            }
        default:
            return state;
    }
}

export default authReducer;

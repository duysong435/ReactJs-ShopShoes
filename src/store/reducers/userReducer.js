import actionTypes from "../actions/actionTypes";

const initState = {
    isLoggedIn: false,
    msg: ''

}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
            }
        case actionTypes.USER_LOGIN_FAILDED:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default userReducer;

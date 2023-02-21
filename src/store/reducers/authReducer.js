import actionTypes from "../actions/actionTypes";

const initState = {
    isLoggedIn: false,
    token: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_CURRENT:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default authReducer;

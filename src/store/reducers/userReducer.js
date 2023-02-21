import actionTypes from "../actions/actionTypes";

const initState = {
    userData: {
        
    },

}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_CURRENT:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default userReducer;
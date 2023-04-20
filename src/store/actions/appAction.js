import actionTypes from "./actionTypes";

const addCart = (data) => {
    return async (dispatch, getState) => {
        try {
            console.log("adsdsad", data)
            dispatch({
                type: actionTypes.ADD_CART_SUCCESS,
                data: data
            })
        } catch (error) {

            dispatch({
                type: actionTypes.DELETE_PRODUCT_FAILDED
            })
        }
    }
}

export {
    addCart
}
import actionTypes from "./actionTypes";
import {
    handleLoginService
} from "../../services/userServices";

const getAllUser = () => {

}

const handleLogin = (email, password) => {
    return async (dispatch, getState) => {
        try {
            const data = await handleLoginService(email, password);
            console.log(data)
            if (data && data.errCode === 0) {
                dispatch({
                    type: actionTypes.USER_LOGIN_SUCCESS,
                    data: data?.data
                });
            } else {
                dispatch({ type: actionTypes.USER_LOGIN_FAILDED });

            }
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    getAllUser,
    handleLogin
}
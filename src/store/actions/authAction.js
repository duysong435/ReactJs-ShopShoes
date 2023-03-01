import actionTypes from "./actionTypes";
import {
    handleLoginService,
    handleRegisterService
} from "../../services/userServices";
import { toast } from 'react-toastify'


const getAllUser = () => {

}

const authLogin = (email, password) => {
    return async (dispatch, getState) => {
        try {
            const data = await handleLoginService(email, password);
            // console.log(data)
            if (data && data?.data?.errCode === 0) {
                dispatch({
                    type: actionTypes.USER_LOGIN_SUCCESS,
                    data: data?.data
                });
            } else {
                dispatch({ type: actionTypes.USER_LOGIN_FAILDED });

            }
        } catch (error) {
            dispatch({ type: actionTypes.USER_LOGIN_FAILDED });
            console.log(error)
        }
    }
}

const authLogout = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.USER_LOGOUT_SUCCESS
            })
        } catch (error) {
            dispatch({
                type: actionTypes.U
            })
            console.log(error)
        }
    }
}

const authRegister = (data) => {
    return async (dispatch, getState) => {
        try {
            const response = await handleRegisterService(data)
            if (response && response?.errCode === 0) {
                console.log(response)
                toast.success('Register success!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                dispatch({
                    type: actionTypes.ADD_USER_SUCCESS,
                    data: response
                })
            } else {
                toast.error('Register failded!')
                dispatch({
                    type: actionTypes.ADD_USER_FAILDED,
                    data: response
                })
            }
        } catch (error) {
            toast.error('Register failded!')
            dispatch({
                type: actionTypes.ADD_USER_FAILDED
            })
            console.log(error)
        }
    }
}

export {
    getAllUser,
    authLogin,
    authLogout,
    authRegister
}
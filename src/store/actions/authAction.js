import actionTypes from "./actionTypes";
import {
    deleteUserService,
    getAllUserService,
    handleLoginService,
    handleRegisterService
} from "../../services/userServices";
import {
    handleAddProductService
} from '../../services/productService'
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
                toast.error(response?.errMessage, {
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

const authAddProduct = (data) => {
    return async (dispatch, getState) => {
        try {
            const response = await handleAddProductService(data)
            if (response && response?.errCode === 0) {
                toast.success('Register success!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                dispatch({
                    type: actionTypes.ADD_PRODUCT_SUCCESS
                })
            } else {
                toast.error(response?.errMessage, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                dispatch({
                    type: actionTypes.ADD_PRODUCT_FAILDED
                })
            }
        } catch (error) {
            toast.error('Register failded!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            dispatch({
                type: actionTypes.ADD_PRODUCT_FAILDED
            })
            console.log(error)
        }
    }
}

const gettAllUser = () => {
    return async (dispatch, getState) => {
        try {
            const response = await getAllUserService();
            // console.log(response)
            if (response && response?.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_ALL_USER_SUCCESS,
                    data: response?.response
                })
            } else {
                dispatch({
                    type: actionTypes.GET_ALL_USER_FAILDED
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.GET_ALL_USER_FAILDED
            })
            console.log(error)
        }
    }
}

const authDeleteUser = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await deleteUserService(id);
            console.log(response)
            if (response && response?.errCode === 0) {
                toast.success('Delete user success!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                dispatch({
                    type: actionTypes.DELETE_USER_SUCCESS,
                    data: response?.response
                })
            } else {
                toast.error('Delete user failded!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                dispatch({
                    type: actionTypes.DELETE_USER_FAILDED
                })
            }
        } catch (error) {
            toast.error('Delete user failded!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            dispatch({
                type: actionTypes.DELETE_USER_FAILDED
            })
        }
    }
}

export {
    getAllUser,
    authLogin,
    authLogout,
    authRegister,
    authAddProduct,
    gettAllUser,
    authDeleteUser
}
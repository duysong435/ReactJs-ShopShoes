import actionTypes from "../actions/actionTypes";

const initState = {
    isLoggedIn: false,
    token: null,
    role: '',
    idUser: '',
    errMessage: '',
    errCode: '',
    arrProduct: [],
    arrUser: [],
    arrGender: [],
    arrRole: [],
    arrBrand: [],
    detailProduct: [],
    arrCart: []
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
                role: action?.data?.role,
                idUser: action?.data.idUser
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
        case actionTypes.ADD_USER_SUCCESS:
            return {
                ...state,
                errMessage: action?.data?.errMessage,
                errCode: action?.data?.errCode
            }
        case actionTypes.ADD_USER_FAILDED:
            return {
                ...state,
                errMessage: action?.data?.errMessage,
                errCode: action?.data?.errCode
            }
        case actionTypes.ADD_PRODUCT_SUCCESS:
            return {
                ...state
            }
        case actionTypes.ADD_PRODUCT_FAILDED:
            return {
                ...state
            }
        case actionTypes.GET_ALL_USER_SUCCESS:
            // console.log(action?.data?.rows)
            state.arrUser = action?.data?.rows
            return {
                ...state,
                // arrUser: action?.data?.rows
            }
        case actionTypes.GET_ALL_USER_FAILDED:
            return {
                ...state
            }
        case actionTypes.DELETE_USER_SUCCESS:
            return {
                ...state
            }
        case actionTypes.DELETE_USER_FAILDED:
            return {
                ...state
            }
        case actionTypes.GET_ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                arrProduct: action?.data?.rows
            }
        case actionTypes.GET_ALL_PRODUCT_FAILDED:
            return {
                ...state
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            return {
                ...state,
                arrGender: action?.data
            }
        case actionTypes.FETCH_GENDER_FAILDED:
            return {
                ...state
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            return {
                ...state,
                arrRole: action?.data
            }
        case actionTypes.FETCH_ROLE_FAILDED:
            return {
                ...state
            }
        case actionTypes.FETCH_BRAND_SUCCESS:
            return {
                ...state,
                arrBrand: action?.data
            }
        case actionTypes.FETCH_BRAND_FAILDED:
            return {
                ...state
            }
        case actionTypes.EDIT_USER_SUCCESS:
            return {
                ...state,
            }
        case actionTypes.EDIT_USER_FAILDED:
            return {
                ...state
            }
        case actionTypes.EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
            }
        case actionTypes.EDIT_PRODUCT_FAILDED:
            return {
                ...state
            }
        case actionTypes.GET_DETAIL_SUCCESS:
            return {
                ...state,
                detailProduct: action?.data
            }
        case actionTypes.GET_DETAIL_FAILDED:
            return {
                ...state
            }
        case actionTypes.GET_ALL_CART_SUCCESS:
            return {
                ...state,
                arrCart: action?.data
            }
        case actionTypes.GET_ALL_CART_FAILDED:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default authReducer;

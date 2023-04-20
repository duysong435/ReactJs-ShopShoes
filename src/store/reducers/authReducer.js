import actionTypes from "../actions/actionTypes";

const initState = {
    isLoggedIn: false,
    token: null,
    role: '',
    idUser: '',
    errMessage: '',
    errCode: '',
    arrProduct: [],
    countProduct: '',
    arrUser: [],
    countUser: '',
    arrGender: [],
    arrRole: [],
    arrBrand: [],
    arrSize: [],
    arrColor: [],
    arrStatus: [],
    detailProduct: [],
    // arrCart: [],
    // countCart: ''
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            // console.log(action)
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
                role: '',
                countCart: '',
                arrCart: [],
                idUser: ''
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
            console.log('reduce', action?.data)
            state.arrUser = action?.data?.rows
            state.countUser = action?.data?.count
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
                arrProduct: action?.data?.rows,
                countProduct: action?.data?.count
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
        case actionTypes.FETCH_SIZE_SUCCESS:
            return {
                ...state,
                arrSize: action?.data
            }
        case actionTypes.FETCH_SIZE_FAILDED:
            return {
                ...state
            }
        case actionTypes.FETCH_COLOR_SUCCESS:
            return {
                ...state,
                arrColor: action?.data
            }
        case actionTypes.FETCH_COLOR_FAILDED:
            return {
                ...state
            }
        case actionTypes.FETCH_STATUS_SUCCESS:
            return {
                ...state,
                arrStatus: action?.data
            }
        case actionTypes.FETCH_STATUS_FAILDED:
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
        default:
            return state;
    }
}

export default authReducer;

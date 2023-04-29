import actionTypes from "../actions/actionTypes";
import { toast } from 'react-toastify'


const initState = {
    arrCart: []

}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CART_SUCCESS:
            let found = state.arrCart.some(element => element.product_id === action.data.product_id);
            if (found) {
                toast.warning('Sản phẩm đã có trong giỏ hàng!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                return state;
            } else {
                const updatedArrCart = [...state.arrCart, action.data];
                toast.success('Đã thêm vào giỏ hàng!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
                return {
                    ...state,
                    arrCart: updatedArrCart
                };
            }
        case actionTypes.ADD_PRODUCT_FAILDED:
            return {
                ...state,
            }
        case actionTypes.CLEAR_CART_SUCCESS:
            return {
                ...state,
                arrCart: []
            }
        default:
            return state;
    }
}

export default appReducer;

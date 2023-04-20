import configAxios from '../configAxios'

const createOrder = ({ user_id, payment_method, status, total_money, is_paid, paidAt }) => {
    return configAxios.post(`/order/create`, {
        user_id,
        payment_method,
        status,
        total_money,
        is_paid,
        paidAt
    })
}

const createOrderDetailService = ({ order_id, product_id, size, amount, price }) => {
    return configAxios.post('/order/create-order-detail', {
        order_id,
        product_id,
        size,
        amount,
        price
    })
}

export {
    createOrder,
    createOrderDetailService
}
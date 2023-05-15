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
    return configAxios.post(`/order/create-order-detail`, {
        order_id: order_id,
        product_id,
        size,
        amount,
        price
    })
}

const getOrderService = (query) => {
    // return configAxios.get(`/user/get-all-user-limit/`)
    return new Promise(async (resolve, reject) => {
        try {
            const response = await configAxios({
                method: 'get',
                url: `/order/get-list-order`,
                params: query
            })
            resolve(response)

        } catch (error) {
            reject(error)
        }
    })
}

const getOrderDetailService = (query) => {
    // return configAxios.get(`/user/get-all-user-limit/`)
    return new Promise(async (resolve, reject) => {
        try {
            const response = await configAxios({
                method: 'get',
                url: `/order/get-order-detail`,
                params: query
            })
            resolve(response)

        } catch (error) {
            reject(error)
        }
    })
}

const deleteOrderService = (id) => {
    return configAxios.delete('/order/delete-order', {
        data: { id }
    })
}

const getOutCheckService = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await configAxios({
                method: 'get',
                url: `/order/get-out-check`,
                params: query
            })
            resolve(response)

        } catch (error) {
            reject(error)
        }
    })
}

const getAdminListOrderService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = configAxios.get(`/order/admin/get-list-order`)
            resolve(response)

        } catch (error) {
            reject(error)
        }
    })
}

const updateAdminStatusOrderService = (id, status) => {
    return configAxios.put('/order/admin/upadte-order-status', { id, status })
}

const getAdminOrderDetail = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await configAxios({
                method: 'get',
                url: `/order/admin/get-order-detail`,
                params: query
            })
            resolve(response)

        } catch (error) {
            reject(error)
        }
    })
}

export {
    createOrder,
    createOrderDetailService,
    getOrderService,
    getOrderDetailService,
    deleteOrderService,
    getOutCheckService,
    getAdminListOrderService,
    updateAdminStatusOrderService,
    getAdminOrderDetail
}
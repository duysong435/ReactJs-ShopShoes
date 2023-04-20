import configAxios from '../configAxios'

const getPaymentService = () => {
    return configAxios.get(`/payment/config`)
}

export {
    getPaymentService
}
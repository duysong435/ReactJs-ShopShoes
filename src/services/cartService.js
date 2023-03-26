import configAxios from '../configAxios'

const getAllCartService = (data) => {
    return configAxios.post('/cart/get-all-cart', {
        id: data
    })
}

export {
    getAllCartService
}
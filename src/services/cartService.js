import configAxios from '../configAxios'

const getAllCartService = (data) => {
    return configAxios.post('/cart/get-all-cart', {
        id: data
    })
}

const getCountCartService = (data) => {
    return configAxios.post('/cart/get-cout-cart', {
        id: data
    })
}

const addCartService = (data) => {
    return configAxios.post('/cart/add-cart',data)
}

export {
    getAllCartService,
    getCountCartService,
    addCartService
}
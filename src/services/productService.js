import configAxios from '../configAxios'

const handleAddProductService = (data) => {
    return configAxios.post('/product/create-product', data
        //  {
        //     name: data.name,
        //     image: data.image,
        //     price: data.price,
        //     detail: data.detail,
        //     brandId: data.brandId,
        //     genderId: data.genderId,
        //     categoryId: data.categoryId
        // }
    )
}

const getAllProductService = (query) => {
    // return configAxios.get('/product/get-all-product-limit')
    return new Promise(async (resolve, reject) => {
        try {
            const response = await configAxios({
                method: 'get',
                url: `/product/get-all-product-limit`,
                params: query
            })
            resolve(response)
    
        } catch (error) {
            reject(error)
        }
    })
}

const editProductService = (data) => {
    return configAxios.put('/product/edit-product', data)
}

const deleteProductService = (id) => {
    return configAxios.delete('/product/delete-product', {
        data: { id }
    })
}

const getDetailService = (id) => {
    return configAxios.get(`/product/detail/${id}`)
}

export {
    handleAddProductService,
    getAllProductService,
    editProductService,
    deleteProductService,
    getDetailService
}
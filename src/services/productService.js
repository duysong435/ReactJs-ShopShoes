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

const getAllProductService = () => {
    return configAxios.get('/product/get-all-product-limit')
}

const editProductService = (data) => {
    return configAxios.put('/product/edit-product', data)
}

const deleteProductService = (id) => {
    return configAxios.delete('/product/delete-product', {
        data: { id }
    })
}

export {
    handleAddProductService,
    getAllProductService,
    editProductService,
    deleteProductService
}
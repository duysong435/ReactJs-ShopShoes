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



export {
    handleAddProductService
}
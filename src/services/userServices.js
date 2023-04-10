import configAxios from '../configAxios'

const handleLoginService = (email, password) => {
    return configAxios.post('/user/login', { email, password })
}

const handleRegisterService = ({ email, password, firstName, lastName, phoneNumber, address }) => {
    return configAxios.post('/user/register', {
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
        address
    })
}

const getAllUserService = (query) => {
    // return configAxios.get(`/user/get-all-user-limit/`)
    return new Promise(async (resolve, reject) => {
        try {
            const response = await configAxios({
                method: 'get',
                url: `/user/get-all-user-limit`,
                params: query
            })
            resolve(response)
    
        } catch (error) {
            reject(error)
        }
    })
}

const deleteUserService = (id) => {
    return configAxios.delete('/user/delete-user', {
        data: { id }
    })
}

const editUserService = (data) => {
    return configAxios.put('/user/edit-user',data)
}

export {
    handleLoginService,
    handleRegisterService,
    getAllUserService,
    deleteUserService,
    editUserService
}
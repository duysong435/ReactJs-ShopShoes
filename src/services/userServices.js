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

const getAllUserService = () => {
    return configAxios.get('/user/get-all-user-limit')
}

const deleteUserService = (id) => {
    return configAxios.delete('/user/delete-user', {
        data: { id }
    })
}

export {
    handleLoginService,
    handleRegisterService,
    getAllUserService,
    deleteUserService
}
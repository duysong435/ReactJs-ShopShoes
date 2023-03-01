import configAxios from '../configAxios'

const handleLoginService = (email, password) => {
    return configAxios.post('/user/login', { email, password })
}

const handleRegisterService = ({ email, password, firstName, lastName }) => {
    return configAxios.post('/user/register', {
        email,
        password,
        firstName,
        lastName
    })
}

export {
    handleLoginService,
    handleRegisterService
}
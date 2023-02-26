import configAxios from '../configAxios'

const handleLoginService = (email, password) => {
    return configAxios.post('/user/login', { email, password })
}

export {
    handleLoginService
}
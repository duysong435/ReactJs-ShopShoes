import configAxios from '../configAxios'

const getAllCodeService = (inputType) => {
    return configAxios.get(`/allcode/get-all-code?type=${inputType}`)
}

export{
    getAllCodeService
}
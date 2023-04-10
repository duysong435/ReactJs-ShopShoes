import { Buffer } from 'buffer';



const convertImg = (base64) => {
    if (!base64) {
        return
    } else {
        const imageBase64 = new Buffer(base64, 'base64').toString('binary')
        return imageBase64
    }
}



export {
    convertImg
}
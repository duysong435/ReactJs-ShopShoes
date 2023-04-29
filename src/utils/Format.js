// var x = 1000
// x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
// console.log(x);
const formatPrice = (price) => {
    return price.toLocaleString('vi-VN');
}

const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = dateObj.getUTCDate();
    const month = dateObj.getUTCMonth() + 1;
    const year = dateObj.getUTCFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate
}
export {
    formatPrice,
    formatDate
}
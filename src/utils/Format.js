// var x = 1000
// x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
// console.log(x);
const formatPrice = (price) => {
    return price.toLocaleString('it-IT');
}

export {
    formatPrice
}
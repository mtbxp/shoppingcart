const getSavedCartItems = () => {
    const getOl = document.querySelector('.cart__items');
    getOl.innerHTML = localStorage.getItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

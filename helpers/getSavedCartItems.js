const getSavedCartItems = () => {
  localStorage.getItem('cartItems');
  // document.querySelector('.cart__items').innerHTML = guardCart;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
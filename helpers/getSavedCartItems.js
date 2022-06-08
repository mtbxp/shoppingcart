const getSavedCartItems = () => localStorage.getItem('cartItems'); /* {
  const olCartItems = document.querySelector('.cart_items');
  const cartItems = localStorage.getItem('cartItems');
  olCartItems.innerHTML = cartItems;
}; */

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

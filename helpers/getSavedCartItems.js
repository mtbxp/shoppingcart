const getSavedCartItems = () => {
  // seu código aqui
  // if (localStorage.getItem('cartItems')) {
  const olCartItems = document.querySelector('.cart__items');
  const cartItems = localStorage.getItem('cartItems');
  olCartItems.innerHTML = cartItems;
  // }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

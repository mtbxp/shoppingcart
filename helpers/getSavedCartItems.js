const getSavedCartItems = () => {
  const getSaved = localStorage.getItem('cartItems');
  const olCartItems = document.querySelector('.cart__items');
  olCartItems.innerHTML = getSaved;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

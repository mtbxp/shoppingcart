const saveCartItems = (texto, array) => {
  localStorage.setItem('cartItems', JSON.stringify(texto));
  localStorage.setItem('cartItemsArray', JSON.stringify(array));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

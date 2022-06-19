const saveCartItems = (texto) => {
  localStorage.setItem('cartItems', texto);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

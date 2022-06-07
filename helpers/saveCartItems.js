const saveCartItems = (arg) => {
  // seu código aqui
  localStorage.setItem('cartItems', arg);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

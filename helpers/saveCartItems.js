const saveCartItems = (value) => localStorage.setItem('cartProducts', value);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

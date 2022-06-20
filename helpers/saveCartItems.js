const saveCartItems = (elements) => localStorage.setItem('cartItems', elements);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

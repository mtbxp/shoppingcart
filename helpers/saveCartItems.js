const saveCartItems = (get) => localStorage.setItem('cartItems', get);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

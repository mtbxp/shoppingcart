const saveCartItems = (flag) => localStorage.setItem('cartItems', flag);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

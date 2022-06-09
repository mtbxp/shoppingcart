const saveCartItems = (olItems) => localStorage.setItem('cartItems', olItems);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

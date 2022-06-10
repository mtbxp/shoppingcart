const saveCartItems = (itemAdded) => localStorage.setItem('cartItems', itemAdded);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

const saveCartItems = (value) => {
  window.localStorage.setItem('cartItems', value);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

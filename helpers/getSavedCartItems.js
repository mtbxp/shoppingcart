const getSavedCartItems = (value) => localStorage.getItem('cartItems', value);

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

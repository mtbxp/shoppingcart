const getSavedCartItems = () => localStorage.getItem('cartItems');
/* istanbul ignore next */
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

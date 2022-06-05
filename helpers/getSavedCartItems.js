const getSavedCartItems = () => localStorage.getItem('cartItems') || JSON.stringify([]);

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

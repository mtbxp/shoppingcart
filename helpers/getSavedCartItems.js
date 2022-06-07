const getSavedCartItems = () => {
  localStorage.getItem('cartItems');
  localStorage.getItem('totalPrice');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

const getSavedCartItems = (arg) => {
  localStorage.setItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

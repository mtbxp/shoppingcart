const getSavedCartItems = () => {
  const response = localStorage.getItem('cartItems');
  return response;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

const getSavedCartItems = () => {
  const response = localStorage.getItem('cartItems');
  return JSON.parse(response);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

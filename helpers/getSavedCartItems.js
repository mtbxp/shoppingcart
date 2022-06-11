const getSavedCartItems = () => {
  // localStorage.getItem('cartItems');
  const data = localStorage.getItem('cartItems');
  return JSON.parse(data);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

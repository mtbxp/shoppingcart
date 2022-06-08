const getSavedCartItems = () => {
  const arr = localStorage.getItem('cartItems');
  const result = JSON.parse(arr);
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

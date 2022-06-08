const getSavedCartItems = () => {
  const string = localStorage.getItem('cartItems');
  const result = JSON.parse(string);
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

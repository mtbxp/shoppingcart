const getSavedCartItems = () => {
  if (localStorage.getItem('cartItems') !== null) {
    const result = JSON.parse(localStorage.getItem('cartItems'));
    return result;
    }
  return null;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

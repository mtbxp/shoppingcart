const getSavedCartItems = () => {
  const getLocalStorage = JSON.parse(localStorage.getItem('cartItems'));
  return getLocalStorage;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

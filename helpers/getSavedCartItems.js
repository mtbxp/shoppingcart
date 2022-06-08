const getSavedCartItems = () => {
  const getStorage = localStorage.getItem('cartItems');
  return JSON.parse(getStorage);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

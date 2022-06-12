const getSavedCartItems = () => {
  const saveItems = localStorage.getItem('cartItems');
  return saveItems;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

const getSavedCartItems = () => {
  const elementBlock = localStorage.getItem('cartItems');
  return elementBlock;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

const getSavedCartItems = () => {
  const get = localStorage.getItem('cartItems');
  return JSON.parse(get);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
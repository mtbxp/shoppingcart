const getSavedCartItems = () => {
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  return storedCartItems;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

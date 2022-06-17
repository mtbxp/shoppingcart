const getSavedCartItems = () => {
  const cartItensSaved = localStorage.getItem('cartItems');
  return cartItensSaved;
};


if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

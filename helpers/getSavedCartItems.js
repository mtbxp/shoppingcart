const getSavedCartItems = (item) => {
  const cartItems = localStorage.getItem(item);
  return cartItems;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

const getSavedCartItems = (cartItems) => {
  localStorage.setItem('cartItems', cartItems);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

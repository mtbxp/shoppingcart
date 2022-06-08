const getSavedCartItems = (items) => {
  localStorage.getItem('cartItems', items);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

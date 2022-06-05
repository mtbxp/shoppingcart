const saveCartItems = (savelist) => {
  localStorage.setItem('cartItems', savelist);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

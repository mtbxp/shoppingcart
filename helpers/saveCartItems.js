const saveCartItems = (name) => {
  localStorage.setItem('cartItems', name);
};
/* istanbul ignore next */
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

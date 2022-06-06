const saveCartItems = (htmlContent) => localStorage.setItem('cartItems', htmlContent);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

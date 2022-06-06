const saveCartItems = (HTMLElement) => {
  localStorage.setItem('cartItems', HTMLElement);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
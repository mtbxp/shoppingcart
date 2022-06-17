const saveCartItems = (element) => {
  localStorage.setItem('cartItems', element);
};

saveCartItems('<ol><li>Item</li></ol>');

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

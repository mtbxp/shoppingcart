const saveCartItems = (olHtml) => {
  const item = olHtml.innerHTML;
  localStorage.setItem('cartItems', item);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
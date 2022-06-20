const saveCartItems = (saveItens) => localStorage.setItem('cartItems', saveItens);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

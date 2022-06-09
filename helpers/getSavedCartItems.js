const getSavedCartItems = () => {
  const ol = document.querySelector('.cart__items');
  const local = localStorage.getItem('cartItems');
  ol.innerHTML = local;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
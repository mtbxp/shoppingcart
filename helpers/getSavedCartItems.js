const getSavedCartItems = () => {
  const ItemList = document.querySelector('.cart__items');
  ItemList.innerHTML = localStorage.getItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

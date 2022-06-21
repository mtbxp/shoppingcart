const getSavedCartItems = () => {
  const replaceCartItems = document.querySelector('.cart__items');
  const storageItems = localStorage.getItem('cartItems');
  replaceCartItems.innerHTML = storageItems;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

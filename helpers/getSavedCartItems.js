const getSavedCartItems = () => {
  const section = document.getElementsByClassName('cart__items')[0];
  section.innerHTML = localStorage.getItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

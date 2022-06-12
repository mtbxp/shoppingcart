const saveCartItems = () => {
  const saveLocalstore = document.querySelector('.cart__items');
  localStorage.setItem('cartItems', saveLocalstore.innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

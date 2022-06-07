const saveCartItems = () => {
  const cart = document.getElementsByClassName('cart__items')[0];
  localStorage.setItem('cartItems', cart.innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

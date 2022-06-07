const saveCartItems = () => {
  const cartItemsToStore = [];
  const currentCartItems = document.querySelectorAll('.cart__item');
  currentCartItems.forEach(({ textContent }) => {
    cartItemsToStore.push(textContent);
  });
   localStorage.setItem('cartItems', JSON.stringify(cartItemsToStore));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

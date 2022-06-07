const saveCartItems = (strOfCartHTML) => {
  // const cartItemsToStore = [];
  // const currentCartItems = document.querySelectorAll('.cart__item');
  // currentCartItems.forEach(({ textContent }) => {
  //   cartItemsToStore.push(textContent);
  // });
  //  localStorage.setItem('cartItems', JSON.stringify(cartItemsToStore));
  localStorage.setItem('cartItems', strOfCartHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

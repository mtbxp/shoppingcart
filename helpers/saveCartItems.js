const saveCartItems = (cartItems) => {
  // seu código aqui
  // if (localStorage.getItem('cartItems') && !cartItems) {
  //   return localStorage.removeItem('cartItems');
  // }
  localStorage.setItem('cartItems', cartItems);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

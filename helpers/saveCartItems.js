const saveCartItems = (cartItems) => {
  if (!localStorage.getItem('cartItems')) {
    localStorage.setItem('cartItems', JSON.stringify([cartItems]));
  } else {
    localStorage.setItem('cartItems',
    JSON.stringify([...JSON.parse(localStorage.getItem('cartItems')), cartItems]));
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

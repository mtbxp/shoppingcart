const saveCartItems = (teste) => {
  localStorage.setItem('cartItems', teste);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

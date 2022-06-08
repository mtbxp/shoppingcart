const saveCartItems = (param) => {
  if (!param) {
    return new Error('You must provide an string');
  }
  localStorage.setItem('cartItems', param);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

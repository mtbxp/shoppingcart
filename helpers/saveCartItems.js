const saveCartItems = (item) => {
  try {
    localStorage.setItem('cartItems', item);
  } catch (error) {
    return new Error('You must provide a valid item');
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

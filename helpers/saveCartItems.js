const saveCartItems = (idItem) => {
  try {
    localStorage.setItem('cartItems', idItem);
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

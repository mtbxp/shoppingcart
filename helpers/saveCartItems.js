const saveCartItems = (itemToBeSaved) => {
  localStorage.setItem('cartItems', JSON.stringify(itemToBeSaved));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

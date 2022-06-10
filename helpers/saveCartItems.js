const saveCartItems = (item) => {
  const data = JSON.stringify(item);
  localStorage.setItem('cartItems', data);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

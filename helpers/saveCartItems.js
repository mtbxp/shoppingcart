const saveCartItems = (list) => {
  // seu código aqui
  localStorage.setItem('cartItems', list);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

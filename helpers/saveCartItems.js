const saveCartItems = (ordenadList) => {
  // seu código aqui
  localStorage.setItem('cartItems', ordenadList);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

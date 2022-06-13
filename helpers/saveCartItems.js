const saveCartItems = (ElementProduct) => {
  // seu código aqui
  localStorage.setItem('cartItems', ElementProduct);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

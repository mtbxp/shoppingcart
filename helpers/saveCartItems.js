const saveCartItems = (product) => {
  // seu código aqui
  
  const response = product;

  localStorage.setItem('cartItems', response);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

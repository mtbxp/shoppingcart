const getSavedCartItems = () => {
  // seu código aqui
  const response = localStorage.getItem('cartItems');
  return response;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

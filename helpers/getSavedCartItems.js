const getSavedCartItems = () => {
  localStorage.setItem('cartItems');
  // seu código aqui
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

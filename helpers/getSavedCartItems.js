const getSavedCartItems = () => {
  // seu código aqui
  localStorage.setItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

const getSavedCartItems = () => {
  // Recupera itens adicionados no localStorage.
  localStorage.getItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

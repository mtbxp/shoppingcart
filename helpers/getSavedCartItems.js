const getSavedCartItems = () => {
  const produtosSalvos = localStorage.getItem('cartItems');
  return produtosSalvos;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

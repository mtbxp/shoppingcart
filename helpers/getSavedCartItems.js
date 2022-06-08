const getSavedCartItems = () => {
  try {
    localStorage.getItem('cartItems');
  } catch (error) {
    throw new Error('Mensagem de Erro');
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

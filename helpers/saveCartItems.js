const saveCartItems = (element) => {
  try {
    localStorage.setItem('cartItems', element);
  } catch (error) {
    throw new Error('Mensagem de Erro');
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

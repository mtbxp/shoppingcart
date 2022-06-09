const saveCartItems = (value) => {
  // Adiciona itens no localStorage.
  localStorage.setItem('cartItems', value); 
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

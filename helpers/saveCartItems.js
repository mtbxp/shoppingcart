const saveCartItems = (data) => {
  if (!data) {
    return new Error('Você deve providenciar o parâmetro "data"');
  }
  localStorage.setItem('cartItems', data);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

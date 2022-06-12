const getSavedCartItems = () => {
  const getLoadLocalstore = localStorage.getItem('cartItems');
  const addLoadLocalstore = document.querySelector('ol.cart__items');
  addLoadLocalstore.innerHTML = getLoadLocalstore;
  const meuCarrinho = document.querySelector('.cart__items');
  meuCarrinho.addEventListener('click', (event) => {
    event.target.remove();
  });
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

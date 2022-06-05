const saveCartItems = (arg) => {
  // função do ato de salvar o carrinho de compras no localStorage
    // função de resgatar os itens dentro do carrinho de compras
    // const btnItem = document.querySelector('.item__cart');
    localStorage.setItem('cartItems', arg);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

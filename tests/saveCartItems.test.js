const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Ao receber o argumento <ol><li>Item</li></ol>, o metodo localStorage.setItem é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toBeCalled();
  });

  it('Ao execurar saveCarItems com o argumento <ol><li>Item</li></ol>, o metodo localStorage.setItem é chamado com dois parâmetros, cartItems e saveCartItems', async () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalledWith('cartItems','<ol><li>Item</li></ol>');
  })
});

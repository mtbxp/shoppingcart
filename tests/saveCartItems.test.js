const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {

  it('Testa se o método localStorage.setItem é chamado', async () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(await localStorage.setItem).toBeCalled();
  });
  it('Testa localStorage é chamado com 2 parâmetros', async () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(await localStorage.setItem).toBeCalledWith('cartItems', '<ol><li>Item</li></ol>');

  });
});

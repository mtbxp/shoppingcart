const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('Teste a função saveCartItems', () => {

  it('1 - Com o argumento "<ol><li>Item</li></ol>", o método localStorage.setItem é chamado', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it('2 - Com o argumento "<ol><li>Item</li></ol>", o método localStorage.setItem é chamado com 2 parâmetros', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenNthCalledWith('cartItems', 'saveCartItems');
  });
});

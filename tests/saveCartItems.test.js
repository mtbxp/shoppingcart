const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('Teste a função saveCartItems', () => {

  it('1 - Com o argumento "<ol><li>Item</li></ol>", o método localStorage.setItem é chamado', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('2 - Com o argumento "<ol><li>Item</li></ol>", o método localStorage.setItem é chamado com 2 parâmetros', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'saveCartItems');
  });
});

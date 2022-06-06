const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem', () => {
    const arg = '<ol><li>Item</li></ol>';
    saveCartItems(arg);
    expect(localStorage.setItem).toBeCalled()
  });

  test('saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, "cartItems" o valor passado como argumento para saveCartItems', () => {
    const arg = '<ol><li>Item</li></ol>';
    saveCartItems(arg);
    expect(localStorage.setItem).toBeCalledWith('cartItems', arg);
  });
});

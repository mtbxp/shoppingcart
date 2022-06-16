const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  const item = '<ol><li>Item</li></ol>';
  it('Testa se, ao executar saveCartItems com o argumento "<ol><li>Item</li></ol>", o método "localStorage.setItem" é chamado', async () => {
    await saveCartItems(item);
    expect(localStorage.setItem).toBeCalled()
  })
  it('Testa se, ao executar saveCartItems com o argumento "<ol><li>Item</li></ol>", o método "localStorage.setItem" é chamado com os parâmetros esperados', async () => {
    await saveCartItems(item);
    expect(localStorage.setItem).toBeCalledWith('cartItems', item)
  })
});

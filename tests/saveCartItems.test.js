const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se, a função saveCartItems ao chamar o método localStorage.setItem', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalled();
  });
  it('Teste se, ao executar saveCartItems, o método localStorage.setItem é chamado dois parametros', async () => {
    const obj = '<ol><li>Item</li></ol>';
    await saveCartItems(obj);
    expect(localStorage.setItem).toBeCalledWith('cartItems', obj);
  });
});

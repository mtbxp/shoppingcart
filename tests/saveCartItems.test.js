const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', async () => {
  test('saveCartItems é uma função', () => {
    expect(typeof saveCartItems).toBe('function')
  });
  test('o que é chamado na função', () => {
    const parm = <ol><li>Item</li></ol>
    expect(saveCartItems(parm)).toHaveBeenCalled(localStorage.setItem);
    expect(saveCartItems(parm)).toHaveBeenCalled(localStorage.setItem('cartItems', parm));
  });
});

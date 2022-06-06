const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', async () => {
  test('saveCartItems é uma função', () => {
    expect(typeof saveCartItems).toBe('function')
  });
  test('o que é chamado na função', () => {
    expect(saveCartItems('<ol><li>Item</li></ol>')).toHaveBeenCalled(localStorage.setItem);
    expect(saveCartItems('<ol><li>Item</li></ol>')).toHaveBeenCalled(localStorage.setItem('cartItems', '<ol><li>Item</li></ol>'));
  });
});

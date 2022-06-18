const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Testa se uma função é chamada', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    const expected = localStorage.setItem;
    expect(expected).toBeCalled();
  });

  it('Testa se uma função é chamada com determinados parâmetros', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    const expected = localStorage.setItem;
    const firstParameter = 'cartItems';
    const secondParameter = '<ol><li>Item</li></ol>';
    expect(expected).toBeCalledWith(firstParameter, secondParameter);
  });
});

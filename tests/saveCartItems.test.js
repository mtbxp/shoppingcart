const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  test('', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    localStorage.setItem('', '');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    localStorage.setItem('cartItems', '<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });

  test('', () => {
    const obj = {teste: 'entrada'};
    const array = [];
    saveCartItems(obj, array);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '[{"teste":"entrada"}]');
  });
});

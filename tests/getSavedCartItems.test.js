const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('getSavedCartItems é uma função', () => {
    expect(typeof getSavedCartItems).toBe('function')
  });
  test('o que é chamado na função', async () => {
    expect(getSavedCartItems()).toHaveBeenCalled(localStorage.getItem);
    expect(getSavedCartItems()).toHaveBeenCalled(localStorage.getItem('cartItems'));
  });
  test('o que é retornado da função', async () => {
    const arr = localStorage.getItem('cartItems');
    const result = JSON.parse(arr);
    expect(getSavedCartItems()).toEqual(result);
  })
});

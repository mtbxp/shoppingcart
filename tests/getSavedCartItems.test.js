const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('o método localStorage.getItem é chamado?', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  test('o método localStorage.getItem é chamado com o "cartItems" como parâmetro.', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
  test(`se retorna algo.`, () => {
    const result = getSavedCartItems();
    expect(result).toEqual(undefined);
  });
});

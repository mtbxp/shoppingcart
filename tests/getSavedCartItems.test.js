const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('saveCartItems é uma função?', () => {
    expect(typeof getSavedCartItems).toBe('function');
  });
  test('ao executar getSavedCartItems, o método localStorage.getItem é chamado;', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  test('ao executar getSavedCartItems, o método localStorage.getItem é chamado com o cartItems como parâmetro.', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith(cartItems);
  });
  test('ao executar getSavedCartItems, retorna os dados', () => {
    expect(getSavedCartItems()).toBe(!null);
  });
});

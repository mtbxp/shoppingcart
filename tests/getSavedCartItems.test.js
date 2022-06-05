const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('o método localStorage.getItem é chamado?', () => {
    getSavedCartItems();
    expect(felocalStorage.getItemtch).toHaveBeenCalled();
  });
  test('o método localStorage.getItem é chamado com o "cartItems" como parâmetro.', () => {
    getSavedCartItems();
    expect(felocalStorage.getItemtch).toHaveBeenCalledWith('cartItems');
      
  });
});

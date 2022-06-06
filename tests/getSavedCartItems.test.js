const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('Se ao executar a função getSavedCartItems, o método localStorage.getItem é chamado', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });

  test('Se ao executar a função getSavedCartItems, o método localStorage.getItem é chamado com "cartItems" como parâmetro', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
  
});

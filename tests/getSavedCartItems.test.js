const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Testa getSavedCartItems,com o método localStorage.getItem é chamado', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Testa o método localStorage.getItem chamando o "cartItems"', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenLastCalledWith('cartItems');
  });
});

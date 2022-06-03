const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Chama o método getItem de localStorage', () => {
    const result = getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('Passa o argumento correto para localStorage.setItem', () => {
    const result = getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});

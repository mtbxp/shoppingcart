const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Verifica se getSavedCartItems foi definida', () => {
    expect(getSavedCartItems).toBeDefined();
  });

  it('Verifica se getSavedCartItems é uma função', () => {
    expect(typeof getSavedCartItems).toBe('function');
  });

  it('Verifica se o método `getItem` do localStorage é chamado quando getSavedCartItems é chamada', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Verifica se o método `getItem` do localStorage é chamado com o parâmetro `cartItems` quando getSavedCartItems é chamada', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});

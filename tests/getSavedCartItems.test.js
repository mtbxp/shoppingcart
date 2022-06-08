const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('verifica se a getSavedCartItens é uma função', () => {
    expect(typeof getSavedCartItems)
    .toBe('function')
  });
  it('testa se ao chamar a função getSavedCartItens,o localStorage é chamado', () => {
    getSavedCartItems("cartItems")
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('verifica se o localStorage.getItem é chamado se o parametro for "cartItems" ', () => {
    getSavedCartItems("cartItems")
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});

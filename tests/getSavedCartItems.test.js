const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {

  it('ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado', () => {
    expect(getSavedCartItems()).toHaveBeenCalledWith(localStorage.getItem);
  })

  it('ao executar `getSavedCartItems`, o método `localStorage.getItem` é chamado com o `cartItems`', () => {
    expect(getSavedCartItems()).toHaveBeenCalledWith(localStorage.getItem('cartItems'));
  })
});

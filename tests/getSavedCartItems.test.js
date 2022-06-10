const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');
const item = require('../mocks/item');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Testa se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
    expect(getSavedCartItems()).toHaveToBeenCalledWith(localStorage.getItem);
  });
  it('testa se o método localStorage.getItem é chamado com o cartItems como parâmetro.', () => {  
    expect(getSavedCartItems()).toHaveToBeenCalledWith(localStorage.getItem(cartItems));
  });
});

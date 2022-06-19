const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // o método localStorage.getItem é chamado;
  it('o método localStorage.getItem é chamado', () => {
    const expected = getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  // o método localStorage.getItem é chamado com o 'cartItems' como parâmetro.
  it('o método localStorage.getItem é chamado com o \'cartItems\' como parâmetro.', () => {
    const expected = getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });

});

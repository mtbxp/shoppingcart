const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Verifica se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
    getSavedCartItems('cartItems')
    expect(localStorage.getItem).toHaveBeenCalled();
  })

  it('Verifica se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro.', () => {
    const argumento = 'cartItems'
    getSavedCartItems(argumento)
    expect(localStorage.getItem).toHaveBeenCalledWith(argumento);
  })
});

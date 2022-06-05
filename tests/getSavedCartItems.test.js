const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toBeCalled()
  });
  it('se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro.', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toBeCalledWith('cartitems')
  });
});

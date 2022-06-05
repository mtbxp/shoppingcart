const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it ('Verifique se ao executar getSavedCartItems, o método localStorage.setItem é chamado', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  })
  it ('Verifique se Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o `cartItems` como parâmetro.', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems')
  })
});

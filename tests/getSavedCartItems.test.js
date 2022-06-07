const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Ao  executar getSavedCartItems localStorage.getItem é chamado', () => {
    getSavedCartItems();
    expect.assertions(1);
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Ao  executar getSavedCartItems localStorage.getItem é chamado com os parâmetros corretos', () => {
    getSavedCartItems();
    expect.assertions(1);
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });

  it('Teste se getSavedCartItems é uma função', () => {
    expect(typeof getSavedCartItems).toBe('function');
  }); 

});

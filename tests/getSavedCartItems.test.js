const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('Teste a função getSavedCartItems', () => {

  it('1 - Executando getSavedCartItems, o método localStorage.getItem é chamado', async () => {
    await getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('2 - Executando getSavedCartItems, o método localStorage.getItem é chamado com "cartItems" como parâmetro', async () => {
    await getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });

  it('3 - Deve ser uma função', () => {
    expect(typeof getSavedCartItems).toBe('function');
  });

});

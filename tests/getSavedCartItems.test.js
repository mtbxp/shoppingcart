const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Ao  executar getSavedCartItems localStorage.getItem é chamado', async () => {
    await getSavedCartItems();
    expect.assertions(1);
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Ao  executar getSavedCartItems localStorage.getItem é chamado com os parâmetros corretos', async () => {
    await getSavedCartItems();
    expect.assertions(1);
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });

  it('Teste se getSavedCartItems é uma função', async () => {
    expect(typeof getSavedCartItems).toBe('function');
  }); 

});

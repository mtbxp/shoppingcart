const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Ao  executar getSavedCartItems localStorage.setItem é chamado', async () => {
    await getSavedCartItems();
    expect.assertions(1);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Ao  executar getSavedCartItems localStorage.setItem é chamado com os parâmetros corretos', async () => {
    await getSavedCartItems();
    expect.assertions(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems');
  });

  it('Teste se getSavedCartItems é uma função', async () => {
    expect(typeof getSavedCartItems).toBe('function');
  });

});

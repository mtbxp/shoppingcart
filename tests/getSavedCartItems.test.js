const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('verifica se localStorage.getItem é chamdo', async() => {
    await getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('verifica se localStorage.getItem é chamado com o parametro `cartItems`', async () => {
    await getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  })
});

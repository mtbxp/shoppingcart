const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Teste se, getSavedCartItems ao chamar localStorage', async () => {
    await getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });
  it('Teste se, ao executar getSavedCartItems, ao chamar localStorage com "cartItems"',async () => {
    await getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
});

const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('should call localStorage', async () => {
    await getSavedCartItems();
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('should call localStorage with correct parameter', async () => {
    await getSavedCartItems();
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems');
  });
  // fail('Teste vazio');
});
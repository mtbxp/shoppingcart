const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  test('If localStorage.getItem is called when calling getSavedCartItems with argument "cartItems"', () => {
    getSavedCartItems('cartItems');
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  test('If localStorage.getItem is called with argument "cartItems" when calling localStorage.getItem with argument "<li>Item</li>"', async () => {
    await getSavedCartItems('cartItems');
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
});

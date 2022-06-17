const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('Se a função getSavedCartItems', async () => {
    await getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });

  test('Se a função getSavedCartItems', async () => {
    await getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
});

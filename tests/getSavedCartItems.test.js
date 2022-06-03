const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('when executing getSavedCartItems, method [] is called', async () => {
    await getSavedCartItems();

    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('when executing getSavedCartItems, method is called with arguments', async () => {
    await getSavedCartItems();

    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});

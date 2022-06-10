const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('1 ', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });
  it('2 ', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
});

const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('calls the method localStorage.getItem when called', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });
  it('calls the method localStorage.getItem with cartItems as argument when called', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
});

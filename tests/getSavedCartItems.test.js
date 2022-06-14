const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Test the function getSavedCartItems', () => {
  it('test if, as the function getSavedCartItems is executed, the method localStorage.getItem is called', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('test if, as the function getSavedCartItems is executed, the method localStorage.getItem is called with "cartItems" as parameter', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
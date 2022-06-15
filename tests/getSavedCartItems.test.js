const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('test if getSavedCartItems call the method localStorage.getItem', () => {
    getSavedCartItems();
    expect.assertions(1);
  expect(localStorage.getItem).toHaveBeenCalled();
  });
 
  it('test if getSavedCartItems call the method localStorage.getItem as the parameter `cartItems`', () => {
    getSavedCartItems();
    expect.assertions(1);
  expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});

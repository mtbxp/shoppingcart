const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('should call the method when the function getSavedCartItems is executed', () => {
    expect(getSavedCartItems()).toHaveBeenCalled();
  });
  it('should call the method with a parameter ("cartItems") when the function getSavedCartItems is executed', () => {
    expect(getSavedCartItems()).toHaveBeenCalledWith(localStorageSimulator('cartItems'));
  });
});

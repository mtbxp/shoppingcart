const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('should call \'localStorage.getItem\' method', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled()
  });
  it('should call \'localStorage.getItem\' with \'cartItems\' as parameter', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems')
  });
});

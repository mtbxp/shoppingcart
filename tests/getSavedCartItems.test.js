const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('getSavadCartItems is a function', () => {
    expect(typeof getSavedCartItems).toBe('function');
  });
  it('When getSavadCartItems is run, localStorage.getItem is called', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });
  it('When getSavadCartItems is run, localStorage.getItem is called with the right argument', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
});

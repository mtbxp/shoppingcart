const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('getSavadCartItems is a function', () => {
    expect(typeof getSavedCartItems).toBe('function');
  });
  it('When getSavadCartItems is run with <ol><li>Item</li></ol> as argument, localStorage.setItem is called', () => {
    getSavedCartItems();
    expect(localStorage.setItem).toBeCalled();
  });
  it('When getSavadCartItems is run with <ol><li>Item</li></ol> as argument, localStorage.setItem is called with the right argument', () => {
    getSavedCartItems();
    expect(localStorage.setItem).toBeCalledWith('cartItems');
  });
});

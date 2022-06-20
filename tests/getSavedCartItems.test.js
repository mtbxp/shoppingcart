const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {

  it('Testing if getSavedCartItems is a function', () => {
    expect(typeof getSavedCartItems).toBe('function')
  });

  it('Testing if when getSavedCartItems are executed, localStorage.getItem is called', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });

  it('Testing if when getSavedCartItem are executed, localStorage.getItem is called with the correct argument', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems')
  });
});



const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('saveCartItems is a function', () => {
    expect(typeof saveCartItems).toBe('function');
  });
  it('When saveCartItems is run with <ol><li>Item</li></ol> as argument, localStorage.setItem is called', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalled();
  });
  it('When saveCartItems is run with <ol><li>Item</li></ol> as argument, localStorage.setItem is called with the right two arguments', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
});

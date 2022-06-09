const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('calls the method localStorage.setItem when called with <ol><li>Item</li></ol> as argument', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalled();
  });
  it('called localStorage.setItem with the expected two arguments when called with <ol><li>Item</li></ol> as argument', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalledWith('cartItems', JSON.stringify('<ol><li>Item</li></ol>'));
  });
});

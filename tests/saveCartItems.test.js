const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Testing if when saveCartItems was execute with <ol><li>Item</li></ol> arguments, the localStorage.setItem method is called', () => {
    saveCartItems('<li>Item</li>');
    expect(localStorage.setItem).toBeCalled();
  });
  it('Testing if the localStorage.setItem method is called with the rigth arguments.', () => {
    saveCartItems('<li>Item</li>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItem', '<ol><li>Item</li></ol>');
  });
});

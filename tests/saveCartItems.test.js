const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Test the function saveCartItems', () => {
  it('test if the function saveCartItems executed with the argument \'<ol><li>Item</li></ol>\' the method localStorage.setItem is called', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('test if the function saveCartItems executed with the argument \'<ol><li>Item</li></ol>\' the method localStorage.setItem is called with two parameters, the first being "cartItems" and the second being the value passed as argument to saveCartItems', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
});
const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('checks if the method "localStorage.setItem" is called when running saveCartItem("<ol><li>Item</li></ol>") ', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('checks if the method "localStorage.setItem" is called with two arguments when running saveCartItem("<ol><li>Item</li></ol>"). The first one is "cartItems" and the second is the saveCartItem argument', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>')
  });
});

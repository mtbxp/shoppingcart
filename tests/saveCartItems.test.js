/**
 * @jest-environment jsdom
 */
const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
const cartItems = require('../script')

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  const testParameter = '<ol><li>Item</li></ol>';

  it('should be a function', () => {
    expect(typeof saveCartItems).toBe('function');
  });
  it('should call localStorage.setItem', () => {
    const test = saveCartItems(testParameter);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('should call localStorage.setItem with the expected parameters', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    console.log(test);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
});

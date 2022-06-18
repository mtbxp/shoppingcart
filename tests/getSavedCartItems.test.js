/**
 * @jest-environment jsdom
 */
const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('should be a function', () => {
    expect(typeof getSavedCartItems).toBe('function');
  });
  it('should call localStorage.getItem', () => {
    const test = getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('should call localStorage.getItem with the expected parameters', () => {
    const test = getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});

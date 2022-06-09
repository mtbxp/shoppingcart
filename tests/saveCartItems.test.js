const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('getSavedCartItens should be a function', () => {
    expect(typeof saveCartItems).toBe('function')
  });
  it('verify if while executing saveCartItems with argument "<ol><li>Item</li></ol>" the method localStorage.setItem is called', () => {
    saveCartItems("<ol><li>Item</li></ol>");
    expect(localStorage.setItem).toBeCalled();
  });
  it('verify if while executing saveCartItems with argument "<ol><li>Item</li></ol>" the method localStorage.setItem is called with two parameters, first as "cartProducts" and second as "saveCartItems"', () => {
    saveCartItems("<ol><li>Item</li></ol>");
    expect(localStorage.setItem).toBeCalledWith("cartProducts","<ol><li>Item</li></ol>");
  });
});

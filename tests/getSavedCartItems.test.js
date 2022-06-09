const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('getSavedCartItens should be a function', () => {
    expect(typeof getSavedCartItems).toBe('function')
  });
  it('when executing getSavedCartItens, localStorage should be called', () => {
    getSavedCartItems("cartProducts");
    expect(localStorage.getItem).toBeCalled();
  });
  it('verify if localStorage.getItem is called if parameter is "cartItems" ', () => {
    getSavedCartItems("cartProducts");
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
});

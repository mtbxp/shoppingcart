const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Test getSavedCartItems function ', () => {
  it('Should call the `localStorage.getItem` method', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });
  it('Should call the `localStorage.getItem` method, given the argument `carItems`', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
});

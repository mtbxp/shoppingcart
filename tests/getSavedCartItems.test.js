const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Testing if execute getSavedCartItems the localStorage.getItem method is called', () => {
    getSavedCartItems('cartItems')
    expect(localStorage.setItem).toBeCalled();
  });
  it('Testing if the localStorage.getItem method is called with the parameter cartItem', async () => {
    await getSavedCartItems('cartItems');
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItem');
  });
});

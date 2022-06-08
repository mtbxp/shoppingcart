const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('a função localStorage foi chamada', () => {
   getSavedCartItems();
   expect.assertions(1);
    expect(localStorage.getItem).toHaveBeenCalled();
    });

  it('a função localStorage foi chamada com os parâmetros corretos', () => {
    getSavedCartItems();
    expect.assertions(1);
      expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
 });
});

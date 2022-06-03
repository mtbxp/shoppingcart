const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
    it('localStorage.setItem is called', () => {
        getSavedCartItems();
        expect(localStorage.getItem).toBeCalled();
    });
    it('localStorage.setItem is called', () => {
        getSavedCartItems();
        expect(localStorage.getItem).toBeCalledWith('cartItems');
      });
});

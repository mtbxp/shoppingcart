const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('should call \'localStorage.setItem\' method when called with \'<ol><li>Item</li></ol>\' as parameter', () => {
    saveCartItems(<ol><li>Item</li></ol>);
    expect(localStorage.setItem).toHaveBeenCalled()
  });
  test('\'localStorage.setItem\' should have the expected arguments \'cartItems\' and \'<ol><li>Item</li></ol>\'', () => {
    saveCartItems(<ol><li>Item</li></ol>);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  })
});

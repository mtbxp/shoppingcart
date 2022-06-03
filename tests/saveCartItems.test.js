const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  test('If localStorage.setItem is called when calling saveCartItems with argument "<li>Item</li>"', () => {
    saveCartItems('<li>Item</li>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('If localStorage.setItem is called with arguments "cartItems" and "<li>Item</li>" when calling localStorage.setItem with argument "<li>Item</li>"', () => {
    saveCartItems('<li>Item</li>');
    expect(localStorage.setItem).toBeCalledWith('cartItems', '<li>Item</li>');
  });
});

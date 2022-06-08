const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  const exemplo = '<ol><li>Item</li></ol>';
  test('Ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    saveCartItems(exemplo);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('Ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    saveCartItems(exemplo);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', exemplo);
  });
});

const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {

  test('Verifica se ao ser executada com o argumento "<ol><li>Item</li></ol>", o método "localStorage.setItem" é chamado',
    () => {
      saveCartItems('<ol><li>Item</li></ol>');
      expect(localStorage.setItem).toBeCalled();
    })

  test('Verifica se ao ser executada com o argumento "<ol><li>Item</li></ol>", o método "localStorage.setItem" é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems',
    () => {
      const argumento = '<ol><li>Item</li></ol>';
      saveCartItems(argumento);
      expect(localStorage.setItem).toBeCalledWidth('cartItems', argumento);
    })
});

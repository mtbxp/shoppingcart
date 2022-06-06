const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('Testa se executar a função com o argumento "<ol><li>Item</li></ol>", o método localStorage.setItem é chamado', async() => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  test('Testa a mesma execução acima no entanto com o localStorage.setItem chamado com dois parametros: "cartItems" e o valor passado como argumento para saveCartItems', async() => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
});

const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  test('se ao executar saveCartItems com o argumento \'<ol><li>Item</li></ol>\', o método localStorage.setItem é chamado', () => {
    const argument = '<ol><li>Item</li></ol>';
    saveCartItems(argument);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('se ao executar saveCartItems com o argumento \'<ol><li>Item</li></ol>\', o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro \'cartItems\' e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    const argument = '<ol><li>Item</li></ol>';
    const param1 = 'cartItems';
    const param2 = argument;
    saveCartItems(argument);
    expect(localStorage.setItem).toHaveBeenCalledWith(param1, param2);
  });
});

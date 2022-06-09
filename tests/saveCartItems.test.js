const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  test('Verifica se saveCartItems é uma função', () => {
    expect(typeof saveCartItems).toBe('function');
  });
  test('Testa se ao executar a função o localStorage.setItem é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  test('Testa se ao executar a função o localStorage.setItem é chamado com dois parâmetros', () =>{ 
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith(cartItems,'<ol><li>Item</li></ol>');
  });
});

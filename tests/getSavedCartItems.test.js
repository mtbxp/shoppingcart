const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  test('Verifica se saveCartItems é uma função', () => {
    expect(typeof getSavedCartItems).toBe('function');
  });
  test('Testa se ao executar a função o localStorage.setItem é chamado', () => {
    getSavedCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  test('Testa se ao executar a função o localStorage.setItem é chamado com dois parâmetros', () =>{ 
    getSavedCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith(cartItems,'<ol><li>Item</li></ol>');
  });
});

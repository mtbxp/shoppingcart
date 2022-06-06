const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  test('Se ao chamar saveCartItems com um argumento próprio, o método localStorage é chamado', () => {
    saveCartItems('elementoHTML');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  test('Se ao chamar saveCartItems com um argumento próprio, o método localStorage é chamado com os parâmetros cartItems e o argumento de saveCartItems', () => {
    saveCartItems('elementoHTML');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'elementoHTML');
  });
  test('Se é lançado um erro caso saveCartItems for chamada com argumeto indefinido', () => {
    expect(() => {
      saveCartItems()
    }).toThrow('saveCartItems foi chamada sem argumento');
  });
});

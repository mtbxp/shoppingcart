const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('Verifica se saveCartItems é uma função', () => {
    expect(typeof saveCartItems).toBe('function')
  });

  test('verifica se o método localStorage é chamado', () => {

  })

  test('Verifica se o localStorage é chamado com o parametro "cartItems"')

  test('Verifica o lançamento de erro, caso o objeto seja diferente')

  fail('Teste vazio');
});

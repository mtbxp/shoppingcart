const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se, ao executar "saveCartItems" com o argumento "<ol><li>Item</li></ol>", o método "localStorage.setItem" é chamado;', () => {
    saveCartItems('')
    expect().toBe();
  })
  fail('Teste vazio');
});

const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('verifica se a getSavedCartItens é uma função', () => {
    expect(typeof saveCartItems)
    .toBe('function')
  });
});

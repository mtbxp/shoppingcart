const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Testa se o metodo localstorage.setItem é chamado', () => {
    expect(saveCartItems(<ol><li>Item</li></ol>)).to
  })
  fail('Teste vazio');
});

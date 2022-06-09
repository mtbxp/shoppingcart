const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('Verificar se `getSavedCartItems` é uma função', async () => {
    await expect(typeof saveCartItems).toBe('function');
  });
});

const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('Testa se é uma função', () => {
    expect(typeof saveCartItems).toBe('function');
  })
  it('Testa se com o argumento <ol><li>Item</li></ol> é chamado o localStorage.setItem', async () => {
    const resp = await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  })
  it('Testa se com o argumento <ol><li>Item</li></ol> é chamado dois parametros', async () => {
    const resp = await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalledWith('cartItems', '<ol><li>Item</li></ol>');
  })
});

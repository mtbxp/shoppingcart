const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('Verificar se `saveCartItems` é uma função', async () => {
    await expect(typeof saveCartItems).toBe('function');
  });
  it('Verificar se o `localStorage.getItem` é chamado na função `saveCartItems`', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Verificar se o `localStorage.getItem` é chamado na função `saveCartItems` com parâmetros', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
});

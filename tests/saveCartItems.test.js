const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Verifica se saveCartItems foi definida', () => {
    expect(saveCartItems).toBeDefined();
  });

  it('Verifica se saveCartItems é uma função', () => {
    expect(typeof saveCartItems).toBe('function');
  });

  it('Verifica se quando a função é chamada com um parâmetro válido o método do localStorage `setItem` é chamado', () => {
    const validParam = '<ol><li>Item</li></ol>';
    saveCartItems(validParam);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Verifica se quando a função é chamada com um parâmetro válido o método do localStorage `setItem` é chamado com os parâmetros corretos', () => {
    const validParam = '<ol><li>Item</li></ol>';
    saveCartItems(validParam);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', validParam);
  });
});
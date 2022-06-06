const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Ao  executar saveCartItems(<ol><li>Item</li></ol>) localStorage.setItem é chamado', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Ao  executar saveCartItems(<ol><li>Item</li></ol>) localStorage.setItem é chamado com os parametros corrtos', async () => {
    const response = await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });

  it('Teste se saveCartItems é uma função', async () => {
    expect(typeof saveCartItems).toBe('function');
  });

  it('Teste se localStorageSimulator é uma função', async () => {
    expect(typeof localStorageSimulator).toBe('function');
  });

  it('Teste erro function SaveCartItems', async () => {
    try {
      await saveCartItems();
    } catch (err) {
      expect(err).toEqual(new Error('you make any error'));
    }
  });
});

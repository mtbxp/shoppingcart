const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Ao  executar saveCartItems(<ol><li>Item</li></ol>) localStorage.setItem é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Ao  executar saveCartItems(<ol><li>Item</li></ol>) localStorage.setItem é chamado com os parametros corrtos', () => {
    const response = saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });

  it('Teste se saveCartItems é uma função', () => {
    expect(typeof saveCartItems).toBe('function');
  });

  it('Teste se localStorageSimulator é uma função', () => {
    expect(typeof localStorageSimulator).toBe('function');
  });

  it('Teste erro function SaveCartItems', () => {
    try {
      saveCartItems();
    } catch (err) {
      expect(err).toEqual(new Error('you make any error'));
    }
  });
});

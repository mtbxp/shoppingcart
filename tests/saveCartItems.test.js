const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('Teste se ao executar o saveCartItems <ol><li>Item</li></ol> localStorage.setItem é chamada', async () => {
    await saveCartItems('<ol><li>Item</li></ol>,');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Teste se ao executar o saveCartItems "<ol><li>Item</li></ol>" localStorage.setItem é chamada com parametro correto', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });

  it('Teste se o fetchProducts retorna um err', async () => {
    try {
      await saveCartItems();
    } catch (err) {
      expect(err).toEqual('You must provide an url')
    }
  });
});

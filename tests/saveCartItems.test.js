const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  //fail('Teste vazio');
  test('Testar se ao executar o saveCartItems <ol><li>Item</li></ol> localStorage.setItem é chamado', async () => {
   await saveCartItems("<ol><li>Item</li></ol>");
    expect(localStorage.setItem).toHaveBeenCalled()
  });
  test('Testar se ao executar saveCartItems <ol><li>Item</li></ol> localStorage.setItem é chamado com o paramento correto', async () => {
    await saveCartItems("<ol><li>Item</li></ol>")
    expect(localStorage.setItem).toHaveBeenCalledWith("cartItems","<ol><li>Item</li></ol>");
  });
  test('Testar se o fetchProducts retorna um error', async () => {
    try {
      await saveCartItems();
    }catch (error) {
      expect(error).toEqual(new Error('You must provide an url'))
    }
  });
});

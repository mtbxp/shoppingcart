const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  /* fail('Teste vazio'); */

  test('Deve chamar o método localStorage.setItem', async () => {
    await saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('Deve chamar o método localStorage.setItem com os dois metodos corretos', async () => {
    await saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });

  test('Deve retornar um erro com a mensagem: "You must provide an url"', async () => {
    const error = new Error('You must provide an url');
    await expect(saveCartItems()).resolves.toThrow(error);
  });

});

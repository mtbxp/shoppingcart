const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Verifica se ao executar a função com argumento "<ol><li>Item</li></ol>", o método localStorege.setItem é chamado', async() => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('Verifica se ao executar saveCartItems com o argumento acima e dois parametros o método localStorege.setItem é chamado',async() => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled('cartItems', '<ol><li>Item</li></ol>');
  });
});

const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', async () => {
    const exec = await saveCartItems('<ol><li>Item</li></ol>')
    expect(exec).toHaveBeenLastCalledWith(localStorage.setItem);
  })
  it('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems.', async () => {
    const execute = await saveCartItems('<ol><li>Item</li></ol>');
    expect(execute).toHaveBeenLastCalledWith();
  })
});
sa
const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se, ao executar `saveCartItems` com o argumento `<ol><li>Item</li></ol>`, o método `localStorage.setItem`', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('testa se localStorage.setItem possui 2 argumentos sendo eles `carItem` e o segundo o valor passado como parametro', async () => {
    const componente = '<ol><li>Item</li></ol>'
    await saveCartItems(componente);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', componente);
  })
});

const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('ao executar a função saveCartItems com argumento `<ol><li>Item</li></ol>`, o método `localStorage.setItem` deve ser chamado.', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalled();
  });

  it('ao executar a função saveCartItems com o argumento `<ol><li>Item</li></ol>`, o método `localStorage.setItem` deve ser chamado com 2 paramentros, sendo o primeiro `cartItems` e o segundo `<ol><li>Item</li></ol>`.', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith(localStorage.setItem('cartItems', '<ol><li>Item</li></ol>'));
  })
  it('deve retornar uma mensagem de erro `mensagem esperada aqui` caso não receba argumento', async () =>{
    ;
    expect(await saveCartItems()).toEqual(new Error('mensagem esperada aqui'));
    });
});
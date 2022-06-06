const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    // (localStorage.setItem())
    // const saveObject = saveCartItems('<ol><li>Item</li></ol>');
    const saveObject = saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem(saveObject)).toHaveBeenCalled();
  })

  /* it('ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    // (localStorage.setItem())
    const saveObject = saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem(saveObject)).toHaveBeenCalled();
  }) */
});

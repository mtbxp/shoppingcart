const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('se é um função', () => {
    expect(typeof saveCartItems).toBe('function')
  })
  test('se ao executar saveCartItems com o argumento "<ol><li>Item</li></ol>", o método localStorage.setItem é chamado', () => {
  saveCartItems('<ol><li>Item</li></ol>');
  expect(localStorage.setItem).toHaveBeenCalled()
  });
  test('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems.', () => {
  saveCartItems('<ol><li>Item</li></ol>');
  expect(localStorage.setItem).toHaveBeenCalledWith('CartItems', '<ol><li>Item</li></ol>')
  })
  test('passada a função sem argumento retorna um erro', () => {
    expect( () => saveCartItems()).toThrow(Error)
  })
});

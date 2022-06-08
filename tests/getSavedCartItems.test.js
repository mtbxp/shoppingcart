const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('setItem');


describe('4 - Teste a função getSavedCartItems', () => {
  test('se é um função', () => {
    expect(typeof getSavedCartItems).toBe('function')
  })
  test('se ao executar saveCartItems com o argumento "<ol><li>Item</li></ol>", o método localStorage.setItem é chamado', () => {
  getSavedCartItems('<ol><li>Item</li></ol>');
  expect(localStorage.setItem).toHaveBeenCalled()
  });
  test('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems.', () => {
  getSavedCartItems('<ol><li>Item</li></ol>');
  expect(localStorage.setItem).toHaveBeenCalledWith('CartItems', '<ol><li>Item</li></ol>')
  })
  test('passada a função algum argumento invalido', () => {
    expect( () => getSavedCartItems()).toThrow(Error)
  })
});

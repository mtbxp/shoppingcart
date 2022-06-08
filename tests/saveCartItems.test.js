const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
 it('Verifique se ao executar a função saveCartItems com o argumento x, o método localStorage.setItem é chamado', () => {
  saveCartItems('<ol><li>Item</li></ol>');
  expect(localStorage.getItem).toBeCalledWith('<ol><li>Item</li></ol>')
 });
 
 it('Verifique se ao executar a função saveCartItems com o argumento x, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro cartItems e o segundo sendo o valor passado como argumento para saveCartItems', () => {
  saveCartItems('<ol><li>Item</li></ol>');
  expect(localStorage.getItem.toBeCalledWith('cartItems', '<ol><li>Item</li></ol>'))
 });
 
});

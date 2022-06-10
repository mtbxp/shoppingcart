const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('Verifica se saveCartItems é uma função', () => {
    expect(typeof saveCartItems).toBe('function')
  });

  test('verifica se o método localStorage é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>') 
    expect(localStorage.setItem).toBeCalled()
    })
  

  test('Verifica se o localStorage é chamado com o parametro "cartItems"')
  saveCartItems()
  expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>')

});

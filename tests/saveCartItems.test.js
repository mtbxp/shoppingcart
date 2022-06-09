const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se saveCartItems é uma função', () => {
  expect(typeof saveCartItems).toBe('function');
  })
  it('Teste se, ao executar saveCartItems com o argumento "<ol><li>Item</li></ol>", o método localStorage.setItem é chamado', () => {
    const result = saveCartItems('<ol><li>Item</li></ol>')
    expect(result).toHaveBeenCalledWith(localStorageSimulator);
  })
  it(`Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, 
    sendo o primeiro 'cartItems' e o segundo sendo o valor passado como argumento para saveCartItems`, () => {
    const result = saveCartItems('<ol><li>Item</li></ol>')
    expect(result).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  })
});
